const initialState = {
    macthHistory: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEWMATCH":
            const items = ["r", "p", "s"];
            const person = action.value;
            let message = "";
            let computer = items[Math.floor(Math.random() * items.length)];
            if (person === computer) {
                message = "Scoreless"
            } else if (person === "r") {
                if (computer === "s") {
                    message = "Person Win"
                } else {
                   message = "Computer Win"
                }
            } else if (person === "s") {
                if (computer === "p") {
                    message = "Person Win"
                } else {
                    message = "Computer Win"
                }
            } else if (person === "p") {
                if (computer === "r") {
                    message = "Person Win"
                } else {
                    message = "Computer Win"
                }
            }

            return {
               macthHistory :  state.macthHistory.concat({ computer: computer, person: person, message : message })
            }
            break;


    }
    return state;
}

export default reducer;