import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';

export default function RewardList(){
    const [rewards, setRewards] = useState([])

    function getRewards(){
        fetch("http://localhost:7123/api/Rewards/GetRewards")
        .then(response => {
            if (response.ok){
                return response.json()
            }
            throw new Error()
        })
        .then(data =>{
            setRewards(data)
        })
        .catch(error =>{
            alert(error)
        })
    }


    useEffect(getRewards, [])


    function deleteReward(id){
        fetch("http://localhost:7123/api/Rewards/DeleteReward/"+id, {
            method: "DELETE"
        })
        .then(response => {
            if (!response.ok)
                throw new Error();
            getRewards()
        })
        .catch(error =>{
            alert("Unable to delete product!")
        })

    }

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Rewards</h2>

            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/admin/rewards/create" role="button">Create reward</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getRewards}>Refresh</button>
                </div>
                <div className="col">
                </div>
            </div>


            <table className="table" style={{fontSize: '19px'}}>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>IsInstantBuy</th>
                        {/* <th>RoomID</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rewards.map((reward, index) => {
                            return (
                                <tr key={index}>
                                    {/*
                                    <td>{reward.id}</td>
                                    */}
                                    <td>
                                        {/* {reward.image} */}
                                        <img src={"http://localhost:7123/api/Images/"+reward.image} alt={"..."} width="50" height="50"/>
                                    </td>
                                    <td>{reward.name}</td>
                                    <td>{reward.description}</td>
                                    <td>{reward.cost}</td>
                                    <td>{reward.instantBuy.toString()}</td>
                                    {/*
                                    <td>{reward.roomId}</td>
                                    */}
                                    <td style={{width: "10px", whiteSpace: "nowrap"}}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/admin/rewards/edit/"+reward.id} style={{fontSize: '19px'}}>Edit</Link>
                                        <button type="button" className="btn btn-danger btn-sm" style={{fontSize: '19px'}} onClick={() => deleteReward(reward.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}