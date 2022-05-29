<template>
  <div class="Club">
    <div class="container mx-auto mt-5 bg-gray-700 text-gray-300">
      <h2 class="text-2xl p-3">UCL CLUBS</h2>
      <div class="forms flex flex-col w-full items-center">
        <div class="box flex flex-col w-1/2 mb-3">
          <label for="name" class="text-sm"> Club Name </label>
          <input
            type="text"
            id="name"
            v-model="state.club.name"
            class="bg-gray-800 py-1 rounded focus outline-none px-2"
          />
        </div>
        <div class="box flex flex-col w-1/2 mb-3">
          <label for="League" class="text-sm"> League </label>
          <input
            type="text"
            id="league"
            v-model="state.club.league"
            class="bg-gray-800 py-1 rounded focus outline-none px-2"
          />
        </div>
        <button
          v-on:click="submitItemHandler"
          class="bg-gray-200 px-5 mb-5 rounded text-gray-900"
        >
          Submit
        </button>
      </div>
    </div>
    <div class="all-clubs mt-4 container mx-auto">
      <ul
        class="list space-y-2 flex inline-flex flex-wrap justify-between w-full"
      >
        <li
          class="text-gray-300 w-1/3 bg-gray-800 list-item shadow hover:bg-gray-700 transition-all transition-colors p-2 ml-3"
          v-for="(item, i) in state.clubList"
          v-bind:key="i"
        >
          <div
            class="inside-list flex justify-between flex-row border-b border-solid border-indigo-900 mb-2"
          >
            <p class="w-1/2">{{ item.name }}</p>
            <p class="w-1/2">{{ item.league }}</p>
          </div>
          <button class="bg-red-600 py-1 px-2 rounded" v-on:click="(e)=>deleteHandler(e, item.id)">Delete</button>
          <button class="bg-blue-600 py-1 px-2 rounded" v-on:click="(e)=>updateHandler(e, item.id)">Update</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { getClubs } from "../graphql/queries";
import { addClub, deleteClub, updateClub } from "../graphql/mutations";
export default {
  setup(props) {
    const state = reactive({
      club: {
        id: null,
        name: null,
        league: null,
      },
      clubList: [],
      update: false,
      isLoading: false,
    });

    onMounted(async () => {
      const allClubs = await getClubs(state);
      console.log(allClubs);
      state.clubList = allClubs;
    });

    const submitItemHandler = async (e) => {
      e.preventDefault();
      // console.log(state.club.league);
      //add new CLub

    if( state.update === true){
      //UPDATE EXISTING CLUB
      const updatedClub = await updateClub(state, state.club.id);
    }else{
      const newClub = await addClub(state);
    }

      //fetch once again to update club list
      const allClubs = await getClubs(state);
      // console.log(allClubs);
      state.clubList = allClubs;
        state.club = {
        id: null,
        name: null,
        league: null,
      };
        state.update = false;
    };



    const deleteHandler = async (e, itemId) => {
      e.preventDefault();
      // console.log(id);
      const deletedClub = await deleteClub(state, itemId);

      const allClubs = await getClubs(state);
      // console.log(allClubs);
      state.clubList = allClubs;
    
    
    };

  const updateHandler = async (e, itemId) => {
    e.preventDefault();
    const selectedClub = state.clubList.filter((club, i) => club.id === itemId)[0];
    state.club.name = selectedClub.name;
    state.club.league = selectedClub.league;
    state.club.id = selectedClub.id;
    // console.log(state);
    state.update = true;
  };

    return {
      state,
      submitItemHandler,
      deleteHandler,
      updateHandler,
    };
  },
  }



  
</script>

<style scoped>
.list-items{
  min-width: 20em;
  min-height: 6em;
  padding: 0;
  margin: 0;
}
</style>
