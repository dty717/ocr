let img; // Declare variable 'img'.
let obj
function setup() {
    img = loadImage('https://i.imgur.com/qQUSi8Y.jpeg'); // Load the image
    obj = {
        
    }
    colorMode(HSB);

}

function draw() {
    // Displays the image at its actual size at point (0,0)
    createCanvas(640, 480);
    image(img, 0, 0);
    noSmooth();

    stroke(random(100, 145), random(80, 100), random(80, 100));

    vertices =
        obj.fullTextAnnotation.pages[0].blocks[12].boundingBox.vertices

    line(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y)
    line(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y)
    line(vertices[2].x, vertices[2].y, vertices[3].x, vertices[3].y)
    // line(vertices[3].x, vertices[3].y,vertices[0].x, vertices[0].y)

    point(130, 83);
    point(175, 82);
    point(175, 101);
    point(130, 102);
}