 export function getSummary(description: string) {
    const data = description.split(" ");
    if ( data.length >= 30) {
        return data.slice(1, 30).join(" ");
    } 
        return data.join(" ");
    
    

}