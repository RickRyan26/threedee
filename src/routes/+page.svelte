<script>
  import { Canvas } from '@threlte/core';
  import { Debug, World } from '@threlte/rapier';
  import { slide } from 'svelte/transition';
  import Scene from '../lib/Scene.svelte';
  import { status, time } from '../lib/state';
  import Timer from '../lib/Timer.svelte';
</script>

<Timer />
<div class="wrapper">
  <Canvas>
    <World>
      <!-- 			<Debug /> -->
      <Scene />
    </World>
  </Canvas>
  <div class="timer row">
    <span>
      {$time}
    </span>
  </div>
  <div class="action row">
    {#if $status === 'IDLE'}
      <button on:click={() => ($status = 'PLAYING')} transition:slide> PLAY </button>
    {:else if $status === 'DONE'}
      <button on:click={() => ($status = 'IDLE')} in:slide> RESET </button>
    {/if}
  </div>
</div>

<style>
  * {
    font-family: Verdana;
  }
  .wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: cornsilk;
  }
  .row {
    position: absolute;
    left: 0;
    width: 100%;
  }

  .timer.row {
    top: 10%;
    width: 100%;
    margin: 0;
    background: #00000055;
    color: white;
    padding: 1rem 0;
    text-align: center;
    font-variant-numeric: tabular-nums;
    font-weight: 600;
  }

  .action.row {
    top: 40%;
  }

  .action.row button {
    width: 100%;
    height: 100%;
    margin: 0;
    background: #00000055;
    color: white;
    padding: 1rem 0;
    cursor: pointer;
    font-weight: 600;
    border: 2px solid transparent;
    transition: all 200ms ease;
  }

  .action.row button:hover {
    border: 2px solid white;
    background: #000000a1;
  }
</style>
