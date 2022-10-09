export const fileUpload = async (images) => {
    const files = Object.values(images)
    let imgArr = []
    let imgObject = {};
    for(const item of files){
        const formData = new FormData()
        formData.append("file", item)
        formData.append("upload_preset", process.env.CLOUD_UPDATE_PRESET)
        formData.append("cloud_name", process.env.CLOUD_NAME)

        const res = await fetch(process.env.CLOUD_API, {
            method: "POST",
            body: formData
        })

        const data = await res.json()
        console.log('imageData', data)
        imgArr.push({public_id: data.public_id, url: data.secure_url})
        Object.assign({}, imgArr);
    }
    // return imgArr;
    return imgObject;
}