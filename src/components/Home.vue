<script lang="ts" setup>
import { isAndroid } from "@nativescript/core"
import { Item } from '~/types';
import { listings } from '~/MockData';
import Icon from './Icon.vue';
import { $showModal } from 'nativescript-vue';
import Details from './Details.vue';

function navigate(item: Item) {
  if (isAndroid) {
    $showModal(Details, { fullscreen: true, animated: true, props: { item } })
  } else {
    $showModal(Details, { props: { item } })
  }
}
</script>

<template>
  <Frame>
    <Page actionBarHidden="true">
      <GridLayout rows="auto, *">
        <StackLayout class="px-3 py-1 android:mt-4">
          <FlexboxLayout class="justify-between items-center rounded-full p-2 box-shadow h-[60]">
            <Icon icon="search" class="text-black" color="black"></Icon>
            <FlexboxLayout class="px-2 flex-col justify-between flex-1 text-base">
              <Label class="font-bold" text="Where to?"></Label>
              <Label class="text-gray-400 mt-1" text="Anywhere Any weed Add guest"></Label>
            </FlexboxLayout>
            <Icon icon="menu" class="text-center text-black ml-auto border-2 rounded-full border-gray-400 w-[45] h-[45]"
              color="black"></Icon>
          </FlexboxLayout>
        </StackLayout>

        <ContentView row="1" class="">
          <ListView :items="listings" separatorColor="transparent" class="bg-transparent">
            <template #default="{ item } : { item: Item }">
              <StackLayout class="px-4 py-2" @tap="navigate(item)">
                <GridLayout rows="*" class="">
                  <Image class="rounded-2xl" stretch="fill" height="300" width="100%" :src=" item.coverUrl "></Image>
                  <Icon verticalAlignment="top" horizontalAlignment="right" icon="favorite_outline" class="pt-3 pr-3">
                  </Icon>
                  <StackLayout verticalAlignment="bottom" horizontalAlignment="left" class="pb-3 pl-3">
                    <FlexboxLayout height="100" class="items-center bg-white rounded-lg px-4">
                      <Image class="rounded-full" stretch="aspectFill" height="50" width="50"
                        :src=" item.landlordAvatarUrl "></Image>
                    </FlexboxLayout>
                  </StackLayout>
                </GridLayout>
                <StackLayout class="mt-2 text-base">
                  <FlexboxLayout class="justify-between items-center">
                    <Label class="font-bold" :text=" item.address "></Label>
                    <FlexboxLayout class="items-center justify-center">
                      <Icon icon="star_outline" fontSize="18" color="black" />
                      <Label :text=" item.rating "></Label>
                    </FlexboxLayout>
                  </FlexboxLayout>
                  <Label class="mt-1 text-gray-400 font-light" :text=" item.title "></Label>
                  <Label class="mt-1 text-gray-400 font-light" :text=" item.availability "></Label>
                  <Label class="mt-1">
                    <FormattedString>
                      <span :text=" `$${item.price}` " fontWeight="bold" />
                      <span text=" night" class="font-light" />
                    </FormattedString>
                  </Label>
                </StackLayout>
              </StackLayout>
            </template>
          </ListView>
        </ContentView>
      </GridLayout>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
