<script>
  import { Group, Mesh } from '@threlte/core';
  import { Collider } from '@threlte/rapier';
  import { onMount } from 'svelte';
  import { elasticInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import { BoxGeometry, MeshStandardMaterial } from 'three';
  import { trackHeight, trackLength, trackWidth } from './state';

  export let position;
  const positionX = tweened(position.x, { duration: 4000, easing: elasticInOut });
  const geometry = new BoxGeometry();
  const material = new MeshStandardMaterial({ color: '#ff0000', toneMapped: false });
  const width = trackWidth / 2 - 2;
  const height = trackHeight - 2;
  const depth = 1;

  function shift() {
    positionX.set($positionX > 0 ? -(width - 2) : width - 2).then(() => shift());
  }

  onMount(() => {
    shift();
  });
</script>

<Collider
  shape="cuboid"
  args={[width / 2, height / 2, depth / 2]}
  position={{ x: $positionX, y: position.y, z: position.z }}
>
  <Mesh {geometry} {material} castShadow receiveShadow scale={{ x: width, y: height, z: depth }} />
</Collider>
