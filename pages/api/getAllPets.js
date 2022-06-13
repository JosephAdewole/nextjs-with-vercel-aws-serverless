import axios from 'axios';

module.exports = async(req, res) => {
    console.log('got here')
    const listofPets = (await axios.get('http://petstore.execute-api.us-east-1.amazonaws.com/petstore/pets'));
    console.log('got response')
    return res.json(listofPets[0])
}
