const imageUpload = document.getElementById('imageUpload')// Upload some images by the element ID

Promise.all([
  //model
  faceapi.nets.faceRecognitionNet.loadFromUri('https://raw.githubusercontent.com/ThaiNhung/My_Resository/master/face-recognition-master//models'),// This is library which we use to face recorgnize -The path contains the image
  faceapi.nets.faceLandmark68Net.loadFromUri('https://raw.githubusercontent.com/ThaiNhung/My_Resository/master/face-recognition-master//models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('https://raw.githubusercontent.com/ThaiNhung/My_Resository/master/face-recognition-master/models')
]).then(start)

async function start() {
   // we will create some rectangles coresspond to each images
  const container = document.createElement('div')//create the variable container - 
  container.style.position = 'relative' // make sure we can recieve the option which we want 
  document.body.append(container)
  const labeledFaceDescriptors = await loadLabeledImages()
  //match the face descriptors of the detected faces from our input image to our reference data
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)// maxDescriptorDistance = 0.6 is a good distance threshold value to judge
  let image //initial variable by let in JS
  let canvas //the canvas element is used to draw graphics on a web page
  document.body.append('Loaded')// display the message on screen which we want 
   //this function below use when wantting change anything image from input
  imageUpload.addEventListener('change', async () => {
    if (image) image.remove()
    if (canvas) canvas.remove()
    image = await faceapi.bufferToImage(imageUpload.files[0]) // this is variable to call the image 
    container.append(image)// this comment use to display the images
    canvas = faceapi.createCanvasFromMedia(image)// use this comment when we want create the image as canvas form
    container.append(canvas)
    const displaySize = { width: image.width, height: image.height }// display size for diffirent image 
    faceapi.matchDimensions(canvas, displaySize)//resize the canvas to match the input image
    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()// call variable faceDetect to detectallface then descripts for each image above
    //document.body.append(detections.length) // this comment to know length of image
    //The returned bounding boxes and landmark positions are relative to the original image / media size. In case the displayed image size does not correspond to the original image size you can simply resize
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box
      //draw the bounding boxes together with their labels into a canvas to display the results
      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
      drawBox.draw(canvas)
    })
  })
}
 // To recognition portion where we can put the diffirent name instead of just generic text 'Face' on each face person.
 //In order to do that we need to parse all the images which we put in the labeled_images folder. => this function below to just put it all the way down here
function loadLabeledImages() {
  const labels = ['Black Widow', 'Captain America', 'Captain Marvel', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark', 'Nhung', 'Hanh']
  return Promise.all(
    labels.map(async label => {
      const descriptions = []
      for (let i = 1; i <= 2; i++) {
        // const img = await faceapi.fetchImage(`https://raw.githubusercontent.com/WebDevSimplified/Face-Recognition-JavaScript/master/labeled_images/${label}/${i}.jpg`)
        // fetch image data from urls and convert blob to HTMLImage element
        const img = await faceapi.fetchImage(`https://raw.githubusercontent.com/ThaiNhung/My_Resository/master/face-recognition-master/labeled_images/${label}/${i}.jpg`)
        //detect the face with the highest score in the image and compute it's landmarks and face descriptor
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(detections.descriptor)
      }

      return new faceapi.LabeledFaceDescriptors(label, descriptions)
    })
  )
}
