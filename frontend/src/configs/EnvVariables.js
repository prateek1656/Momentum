

let API_HOST = ''
let APP_ENV = process.env.REACT_APP_ENV
API_HOST = 'http://localhost:3000'
switch (APP_ENV) {
    case 'local': 
	console.log('connecting to local');
		API_HOST = 'http://localhost:3000'
        break;
    case 'dev':
        console.log('connecting to dev api')
        API_HOST = 'https://finfast-api-dev.vercel.app'
        break;
    default:
        console.log('connecting to default api')
        API_HOST = 'https://finfast-api-dev.vercel.app'
        break;
    
}

let API_VERSION = 'api/v1'

export {
    APP_ENV,
    API_HOST,
    API_VERSION,
}