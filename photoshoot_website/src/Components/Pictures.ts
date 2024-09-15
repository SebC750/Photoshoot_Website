//This is where all the code about creating pictures and organizing them all into an array to be shown in the gallery.

interface Picture{
    title: String,
    date: Date,
    fileUrl: String,
}
const picture1: Picture = {
    title: "t1",
    date: new Date(),
    fileUrl: "hello world.txt"
}

export function logPicture(){
    console.log(picture1)
}