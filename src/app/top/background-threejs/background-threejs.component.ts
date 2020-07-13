import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import * as THREE from 'three';
import {AsciiEffect} from 'three/examples/jsm/effects/AsciiEffect';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-background-threejs',
  templateUrl: './background-threejs.component.html',
  styleUrls: ['./background-threejs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundThreejsComponent implements OnInit, OnDestroy {
  animationIntervalSubscription: Subscription;
  camera;
  scene;
  renderer;
  geometry;
  sphere;
  material;
  mesh;
  plane;
  effect;
  controls;
  start = Date.now();

  constructor() { }

  ngOnInit() {
    this.initThreeJs();

    this.animationIntervalSubscription = interval(1).pipe(tap(() => {
      this.animation();
    })).subscribe();
  }

  ngOnDestroy(): void {
    this.animationIntervalSubscription?.unsubscribe();
  }

  initThreeJs() {
    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    this.camera.position.y = 150;
    this.camera.position.z = 500;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0, 0, 0 );

    let light = new THREE.PointLight( 0xffffff );
    light.position.set( 500, 500, 500 );
    this.scene.add( light );

    light = new THREE.PointLight( 0xffffff, 0.25 );
    light.position.set( - 500, - 500, - 500 );
    this.scene.add( light );

    this.sphere = new THREE.Mesh( new THREE.SphereBufferGeometry( 200, 20, 10 ), new THREE.MeshPhongMaterial( { flatShading: true } ) );
    this.scene.add( this.sphere );

    // Plane

    this.plane = new THREE.Mesh( new THREE.PlaneBufferGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
    this.plane.position.y = - 200;
    this.plane.rotation.x = - Math.PI / 2;
    this.scene.add( this.plane );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.effect = new AsciiEffect( this.renderer, ' .:-+*=%@#', { invert: true } );
    this.effect.setSize( window.innerWidth, window.innerHeight );
    this.effect.domElement.style.color = 'white';
    this.effect.domElement.style.backgroundColor = 'black';
    document.querySelector('#background-anime-three').appendChild(this.effect.domElement);
    // this.controls = new TrackballControls( this.camera, this.effect.domElement );
    this.controls = new OrbitControls( this.camera, this.effect.domElement );

    window.addEventListener( 'resize', this.onWindowResize, false );
  }

  onWindowResize() {

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.effect.setSize( window.innerWidth, window.innerHeight );

  }

  animation() {
    this.render();
  }

  render() {
    const timer = Date.now() - this.start;

    this.sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
    this.sphere.rotation.x = timer * 0.0003;
    this.sphere.rotation.z = timer * 0.0002;

    this.controls.update();

    this.effect.render( this.scene, this.camera );
  }

}
