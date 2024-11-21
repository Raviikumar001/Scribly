
const useCreateDate = ():string=>{

    const date = new Date(Date.now()).toLocaleDateString("en-IN", {
        hour:"2-digit",
        minute:"2-digit"
    })

    return date;
}

export default useCreateDate