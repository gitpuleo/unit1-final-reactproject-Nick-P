

//This will incorporate useState in order to handle dynamically rendering the CV components. 
function ComponentSelector() {

    return (
        <div class="sidenav">
            <button class="dropdown-btn">Work History
                <i class="caret-down"></i>
            </button>
            <div class="dropdown-container">
                <label>
                    <input type="checkbox" checked />
                    Professional
                </label>
                <label>
                    <input type="checkbox" checked />
                    Service
                </label>
            </div>
        </div>
    );
}

export default ComponentSelector;
