import axios from 'axios';

module.exports = async(req, res) => {
    const listofPets = (await axios.get('http://petstore.execute-api.us-east-1.amazonaws.com/petstore/pets')).data;
    
    return res.json(listofPets[0])
}
