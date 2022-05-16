<template>
  <li>
    <div class="title">
      {{ workspace.title }}
    </div>
    <ul v-if="hasChildren">
      <WorkspaceItem
        v-for="ws in workspace.documents"
        :key="ws.id"
        :workspace="ws" />
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    workspace: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    hasChildren() {
      return this.workspace.documents && this.workspace.documents.length;
    }
  }
};
</script>