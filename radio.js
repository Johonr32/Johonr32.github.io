let a = ["https://tupanel.info/stream/radiojr/stream", {
                headers: {
                    "accept": "*/*",
                    "accept-language": "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                    "range": "bytes=0-",
                    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Microsoft Edge\";v=\"121\", \"Chromium\";v=\"121\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "audio",
                    "sec-fetch-mode": "no-cors",
                    "sec-fetch-site": "same-site"
                },
                referrer: "https://tupanel.info:2000/",
                referrerPolicy: "strict-origin-when-cross-origin",
                body: null,
                method: "GET",
                mode: "cors",
                credentials: "omit"
            }]
			
let chunks = [];
async function pro(){
	const prom = await fetch(a[0],a[1]);
	
	const reader = await prom.body.getReader();
	

	
	async function processStream() {
        while (true) {
            const { done, value } = await reader.read();
            
            if (done) {
                console.log('Stream completado: ' + done);
                break;
            }
            
            // Procesar el chunk (value es un Uint8Array)
			chunks.push(value);
			lengthelem.textContent = largo = chunks.length;
            //console.log('Stream completado: ' + done, 'Chunk recibido', value,);
        }
    }
    
    // Procesar el stream
    processStream();
	

}

//desde la consola llama a pro() luego de que lleguen algunos "chunks" usa -> 
/*
	const blob = new Blob(chunks, { type: 'audio/mpeg' });
    const audioUrl = URL.createObjectURL(blob);

    const audio = new Audio(audioUrl);
    audio.controls = true;
    document.body.appendChild(audio);
    audio.play();
	
*/