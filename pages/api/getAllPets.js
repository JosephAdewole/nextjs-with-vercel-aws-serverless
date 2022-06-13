import axios from 'axios';

module.exports = async(req, res) => {
    console.log('got here')
    const { id } = req.query;
    const listofPets = (await axios.get('http://petstore.execute-api.us-east-1.amazonaws.com/petstore/pets')).data;
    console.log('got response')
    const singlePet = listofUsers.filter(item => {
        if(item.id == id) return item
    });
    return res.json(singlePet[0])
}
