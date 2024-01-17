import React, { useState } from 'react';

const ToDoListComponent = () => {
          // Einzelner Zustand für beide Checkboxen
          const [isChecked, setIsChecked] = useState({
            checkbox1: false,
            checkbox2: false,
          });
        
          // Gemeinsame Funktion zum Aktualisieren des Zustands
          const handleCheckboxChange = (checkboxName) => {
            setIsChecked((prev) => ({
              ...prev,
              [checkboxName]: !prev[checkboxName],
            }));
          };
        
          // Inline-Styling für die Labels basierend auf den Checkbox-Zuständen
          const labelStyle1 = {
            color: isChecked.checkbox1 ? 'green' : 'black',
            fontWeight: isChecked.checkbox1 ? 'bold' : 'normal',
          };
          const labelStyle2 = {
            color: isChecked.checkbox2 ? 'green' : 'black',
            fontWeight: isChecked.checkbox2 ? 'bold' : 'normal',
          };
        
          return (
            <div>
              <h2>To Do List</h2>
                <p>
              <label style={labelStyle1}>
                Lasagne kochen
                <input
                  type="checkbox"
                  checked={isChecked.checkbox1}
                  onChange={() => handleCheckboxChange('checkbox1')}
                />
              </label>
              </p>
              <p>
              <label style={labelStyle2}>
                Welt erobern
                <input
                  type="checkbox"
                  checked={isChecked.checkbox2}
                  onChange={() => handleCheckboxChange('checkbox2')}
                />
              </label>
            </p>
            </div>
          );
        };
        
        export default ToDoListComponent;
        
