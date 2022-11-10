import * as THREE from 'https://cdn.skypack.dev/three';
const canvas = document.querySelector("#canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const radius = 7;
const widthSegments =12;
const heightSegments = 8;
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const material = new THREE.PointsMaterial({
    color: 'red',
    size: 0.7,     // 글로벌 단위
});
const points = new THREE.Points(geometry, material);
scene.add(points);

/*
const lightColor = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(lightColor, intensity);
light.position.set(-1, 2, 4);
scene.add(light);
*/
camera.position.z = 20;

function animate() {
  requestAnimationFrame(animate);
  points.rotation.x += 0.003;
  points.rotation.y += 0.003;
  renderer.render(scene, camera);
}
animate();