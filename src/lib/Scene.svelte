<script>
  import CameraRig from './CameraRig.svelte';
  import FinishSensor from './FinishSensor.svelte';
  import LightRig from './LightRig.svelte';
  import Player from './Player.svelte';
  import ShiftyBar from './ShiftyBars.svelte';
  import ShiftyWall from './ShiftyWall.svelte';
  import { shiftyBars, shiftyWalls } from './state';
  import Track from './Track.svelte';
</script>

<LightRig />
<CameraRig />
<Track />
<Player />
<FinishSensor />

{#each shiftyWalls as wall}
  <ShiftyWall position={wall.position} />
{/each}

{#each shiftyBars as bar}
  <ShiftyBar type={bar.type} position={bar.position} />
{/each}
