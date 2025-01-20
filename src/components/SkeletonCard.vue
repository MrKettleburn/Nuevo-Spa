<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">   
                <div class="flex flex-col items-center gap-4 py-8">
                    <div class="flip-card-photo flex justify-center items-center h-full">
                        <Skeleton width="85%" height="280px"/>
                    </div>
                    <Skeleton width="8rem" height="2rem" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Skeleton } from 'primevue';

</script>

<style scoped>

.flip-card {
  width: 280px;
  height: 380px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.flip-card-photo{
  top: 0px;
  margin: 20px;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 85%;
  height: 280px;
  border-radius: 1rem;
}


.flip-card-front {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgb(166, 166, 166); /*coral*/
  border-radius: 1rem;
}

</style>