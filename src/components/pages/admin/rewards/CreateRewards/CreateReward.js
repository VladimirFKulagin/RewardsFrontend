import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ReactSelect from 'react-select'


    

  const options_icons = [
    { value: "Sport", label: 'Sport',  image: 'https://cdn-icons-png.flaticon.com/512/5438/5438900.png' },
    { value: "Theater", label: 'Theater', image: 'https://cdn-icons-png.flaticon.com/512/10156/10156990.png' },
    { value: "Game", label: 'Game',  image: 'https://c0.klipartz.com/pngpicture/177/691/gratis-png-controladores-de-videojuegos-negros-iconos-de-computadora-juegos.png' },
    { value: "Cinema", label: 'Cinema', image: 'data:image/png;base64,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' },
    { value: "Other", label: 'Other', image: 'https://cdn-icons-png.flaticon.com/128/4570/4570695.png' },
  ];
  
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#AEE1E5', // Цвет фона контейнера
      border: '1px solid #ccc', // Цвет границы
      boxShadow: 'none', // Убираем тень
      fontSize: '20px',
      '&:hover': {
        border: '1px solid blue', // Цвет границы при наведении
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#98D16C' : state.isFocused ? '#98D16C' : '#AEE1E5', // Цвет фона опции
      color: state.isSelected ? 'black' : 'black', // Цвет текста
      fontSize: '20px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'lightblue', // Цвет фона выпадающего меню
      fontSize: '20px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black', // Цвет выбранного значения
      fontSize: '20px',
    })
  };
  



export default function CreateReward() {

        const [validationErrors, setValidationErrors] = useState({})
    
        const [selectedOption, setSelectedOption] = useState(options_icons[4]);

        const handleChange = (option_icons) => {
          setSelectedOption(option_icons);
        };

        // Функция для форматирования отображения опции
        const formatOptionLabel = ({ label, image }) => (
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#AEE1E5'}}>
            <img src={image} alt={label} style={{ width: 40, height: 40, marginRight: 10, backgroundColor: '#AEE1E5' }} />
            <span>{label}</span>
            </div>
        );

        //для checkBox
        const [instantBuyChecked, setChecked] = useState(true);
        
        const handleChangeCheckBox = (e) => {
            setChecked(e.target.checked);
        };
    
    const navigate = useNavigate()

    async function handleSubmitCreate(event)
    {
        event.preventDefault()
        const formData = new FormData(event.target)
        const reward = Object.fromEntries(formData.entries())
        if (!reward.reward_name 
            || !reward.reward_cost 
            || !reward.reward_roomId  ){
                alert("Please fill all the fields!")
                return
            }
        try {
            const requestData={
                name: reward.reward_name,
                description: reward.reward_description,
                image: selectedOption.label,
                cost: parseInt(reward.reward_cost),
                instantBuy: Boolean(reward.instantBuyChecked),
                roomId: reward.reward_roomId
            };
            const response = await fetch("http://localhost:7123/api/Rewards/CreateReward",{
                method: "POST",
                body: JSON.stringify(requestData),
                headers: {
                    "Content-Type": "application/json"
                  },
            })

            const data = await response.json()

            if (response.ok){
                navigate("/admin/rewards")
            }
            else if (response.status === 400)
            {
                alert("Validation errors!")
            }
            else {
                alert("Unable to create the reward")
            }
        } catch (error) {
            alert("Unable to connection to the server!")
        }
        
    }


    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4 " style={{backgroundColor: '#73AB84'}} >
                    <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent:'center', marginBottom: '15px' }}>
                        <img src={selectedOption.image} alt={selectedOption.label} width="50" height="50"/>
                        <h2>Create Reward</h2>
                    </div>
                    <form onSubmit={handleSubmitCreate}>
                        <div className="row mb-3" >
                            <label className="col-sm-4 col-form-label" style={{fontSize:'20px'}}>Name</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="reward_name" id='frm' style={{backgroundColor: '#AEE1E5'}}/>
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label" style={{fontSize:'20px'}}>Description</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="reward_description" rows="4" style={{backgroundColor: '#AEE1E5'}}/>
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label" style={{fontSize:'20px'}}>Image</label>
                            <div className="col-sm-8" >
                                <ReactSelect
                                    styles= {customStyles}
                                    value={selectedOption}
                                    onChange={handleChange}
                                    options={options_icons}
                                    formatOptionLabel={formatOptionLabel}
                                />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label" style={{fontSize:'20px'}}>Cost</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="reward_cost" style={{backgroundColor: '#AEE1E5'}}/>
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            {/* <label className="col-sm-4 col-form-label">IsInstant</label> */}
                            <label className="col-sm-4 col-form-label"></label>
                            <div className="col-sm-8">
                                {/* <input className="form-control" name="roomId" style={{backgroundColor: '#AEE1E5'}}/> */}
                                <input type = "checkbox" checked = {instantBuyChecked} onChange={handleChangeCheckBox} style = {{marginRight: 20, transform: 'scale(2)' }}/>
                                <span className="text-danger"></span>
                                <label className="col-sm-4 col-form-label h1" style={{fontSize:'20px'}}>IsInstantBuy</label>
                            </div>
                        </div>

                        <div className="row mb-3" >
                            <label className="col-sm-4 col-form-label" style={{fontSize:'20px'}}>RoomId</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="reward_roomId" id='frm' style={{backgroundColor: '#AEE1E5'}} defaultValue='00000000-0000-0000-0000-000000000000'/>
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to='/admin/rewards' role="button">Cancel</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
    
