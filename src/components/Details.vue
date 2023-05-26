<script lang="ts" setup>
import { PropType } from 'nativescript-vue';
import { Item } from '~/types';
import Icon from './Icon.vue';

const { item } = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true
  }
})
</script>

<template>
  <Page actionBarHidden="true">
    <ScrollView >
      <StackLayout class="px-3">
        <FlexboxLayout class="justify-start items-center mt-4" v-for="(infoItem, i) in item.infoItem" :key="i">
          <Icon :icon="infoItem.icon" color="black" class="ios:w-[26] android:w-[32]" ></Icon>
          <Label class="text-base ml-3" :text="infoItem.text"></Label>
        </FlexboxLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
