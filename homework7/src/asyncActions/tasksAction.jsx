export function LOAD(data){
    return{
        type: 'LOAD',
        payload: data,
    }
}

export function getTasks(){
    return async function(dispatch) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        dispatch(LOAD(data))
    }
}