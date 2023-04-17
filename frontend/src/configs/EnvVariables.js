let API_HOST = ''
let APP_ENV = process.env.REACT_APP_ENV
API_HOST = 'http://127.0.0.1:3000'
switch (APP_ENV) {
    case 'local': 
	console.log('connecting to local');
		API_HOST = 'http://127.0.0.1:3000'
        break;
    case 'dev':
        console.log('connecting to dev api')
        API_HOST = 'http://momentumv2.glitch.me/'
        break;
    default:
        console.log('connecting to default api')
        API_HOST = 'http://127.0.0.1:3000'
        break;
}

let API_VERSION = 'api/v1'

export {
    APP_ENV,
    API_HOST,
    API_VERSION,
}