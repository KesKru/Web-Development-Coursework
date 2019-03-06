console.log("Connected !!");

state = {
    id: '',
    name: '',
    email: '',
    number: '',
    showContactInfo: true,
    errors: { p1: 1 }
}

console.log(state);

// state2 = {
//     ...state,
// }
state.errors.p2 = 2

console.log(state);
