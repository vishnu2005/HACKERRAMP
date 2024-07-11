document.getElementById('measurements-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const measurements = {
      bust: formData.get('bust'),
      waist: formData.get('waist'),
      hips: formData.get('hips'),
      inseam: formData.get('inseam'),
      skinTone: formData.get('skin-tone')
    };
    console.log('User Measurements:', measurements);
    // Call the function to generate the 3D model using these measurements
    generate3DModel(measurements);
  });

  function generate3DModel(measurements) {
    // Placeholder function to generate 3D model
    // Integration with a 3D modeling tool is required here
    console.log('Generating 3D model with measurements:', measurements);
    // Example: Update the 3D viewer with the new model
    document.getElementById('threedviewer').innerHTML = '<p>3D Model will be displayed here</p>';
  }