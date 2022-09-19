function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices =[
      //number 4
      0.375 , 0.994,
      0.199 , 0.995,
      0.0 , 0.7,
      0.0 , 0.5,
      0.27 , 0.5,
      0.27 , 0.001,
      0.375 , -0.003,
      
      //inside number 4
      0.3 , 0.870,
      0.199 , 0.870,
      0.1 , 0.688,
      0.1 , 0.596,
      0.290 , 0.596,

      //number 2
      0.4 , 0.55,
      0.4 , 0.77,
      0.55 , 0.995,
      0.77 , 0.995,
      0.9 , 0.77,
      0.9 , 0.55,
      0.55 , 0.1,
      0.9 , 0.1,
      0.9 , -0.003,
      0.4 , -0.003,
      0.4 , 0.1,
      0.75 , 0.60,
      0.75 , 0.81,
      0.55 , 0.81,
      0.55 , 0.60,

      //alphabet A
      -0.8, 0.995, 
      -0.65, -0.003, 
      -0.55, -0.003, 
      -0.84, -0.003, 
      -0.95, -0.003, 
      -0.8, 0.995,
      
      //alphabet r
      -0.2, 0.995, 
      -0.2, 0.9, 
      -0.65, 0.995,

      -0.65, 0.995,
      -0.6, 0.9,
      -0.2, 0.9,

      -0.5, 0.9,
      -0.6, 0.7,
      -0.6, -0.003,

      -0.5, -0.003,
      -0.6, -0.003,
      -0.5,  0.9,

      -0.06, 0.995,
      -0.2, 0.995,
      -0.2, 0.4,

      -0.06, 0.995,
      -0.06, 0.4,
      -0.2, 0.4,

      -0.5, 0.4,
      -0.3, 0.55,
      -0.0, 0.0,


      



      

      


      

    

         
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
    var vertexShaderCode = `
    attribute vec2 aPosition;
    void main () {
      gl_PointSize = 40.0;  // adding size of point
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode); 
    gl.compileShader(vertexShader);
  
    var fragmentShaderCode = `
          void main () {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
          }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader); 
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
  
    //gl.clearColor(1.0, 0.75, 0.79, 1.0); 
  
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    gl.drawArrays(gl.LINE_LOOP, 0, 7);
    gl.drawArrays(gl.LINE_LOOP, 7, 5);
    gl.drawArrays(gl.LINE_LOOP, 12, 15);
    gl.drawArrays(gl.TRIANGLES, 27, 6);
    gl.drawArrays(gl.TRIANGLES, 33, 21);

}