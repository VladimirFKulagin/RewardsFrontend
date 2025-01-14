import React, { useState } from 'react';
import Select from 'react-select';

// Массив опций с изображениями
const options = [
  { value: 'option1', label: 'Option 1', image: 'https://cdn-icons-png.flaticon.com/512/5438/5438900.png' },
  { value: 'option2', label: 'Option 2', image: 'https://cdn-icons-png.flaticon.com/512/10156/10156990.png' },
  { value: 'option3', label: 'Option 3', image: 'https://c0.klipartz.com/pngpicture/177/691/gratis-png-controladores-de-videojuegos-negros-iconos-de-computadora-juegos.png' },
];

// Устанавливаем начальное значение по умолчанию
const defaultOption = options[0]; // Например, выбираем первую опцию

const NewComponent = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  // Функция для форматирования отображения опции
  const formatOptionLabel = ({ label, image }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={image} alt={label} style={{ width: 40, height: 40, marginRight: 10 }} />
      <span>{label}</span>
    </div>
  );

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        formatOptionLabel={formatOptionLabel} // Используем функцию форматирования
      />
      <label>
        Выбранное значение: {selectedOption ? selectedOption.label : 'ничего не выбрано'}
      </label>
    </div>
  );
};

export default NewComponent;