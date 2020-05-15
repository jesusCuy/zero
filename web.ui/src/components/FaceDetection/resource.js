

export const analyzeImage = (imgSrc) => {
  return new Promise((resolve, rej) => {
    fetch(imgSrc)
    .then(res => res.blob())
    .then(blobData => {
      fetch('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fd6b7bba-43b5-4471-9bf5-c31de4e3b674/detect/iterations/Iteration3/image', {
        method: 'POST',
        body: blobData, 
        headers:{
          'Content-Type': 'application/octet-stream',
          'Prediction-Key': '610605587caa4b87be0e9e109a53db72',
        }
      }).then(res => res.json())
      .catch(error => {
        console.error('Error:', error);   
        resolve({error:error});
      })
      .then(response =>{ 
        console.log('Success:', response);  
        const result =  parseAnalyzeResult(response);
        resolve(result);
      });
    });
  });
};

export const parseAnalyzeResult = (result) => {
  if(
      !result.predictions 
      || result.predictions.length === 0
    ) return {value:0};

    const bestPrediction = result.predictions.sort((a, b) => (a.probability > b.probability ? -1 : 1))[0]; 
    const value = bestPrediction.probability * 100;
    const propability = { 
        value: Math.round(value * 100) / 100, 
        type: bestPrediction.tagName
      };
    return propability;
};