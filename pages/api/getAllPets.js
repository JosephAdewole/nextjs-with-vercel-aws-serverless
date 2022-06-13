import axios from 'axios';

module.exports = async(req, res) => {
    const { id } = 1;
    const listofPets = (await axios.get('http://petstore.execute-api.us-east-1.amazonaws.com/petstore/pets')).data;
    const singlePet = listofPets.filter(item => {
        if(item.id == id) return item
    });
    return res.json(singlePet[0])
}
