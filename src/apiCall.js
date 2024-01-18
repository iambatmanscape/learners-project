

async function call(s) {
    let api;
  if(s) {
	api=`https://mockcourse.free.beeceptor.com/${s}`;
} else {
    api='https://mockcourse.free.beeceptor.com';
}

    try {
    	const response = await fetch(api);
    	const responseData = await response.json();
    	return responseData;
    } catch(e) {
    	console.log(e);
    }
}

export default call;