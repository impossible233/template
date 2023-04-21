/** When your routing table is too long, you can split it into small modules **/

import Layout from "@/layout";

const componentsRouter = {
  path: "/components",
  component: Layout,
  redirect: "noRedirect",
  name: "ComponentDemo",
  meta: {
    title: "组件",
    icon: "component",
  },
  children: [
    {
      path: "json-editor",
      component: () => import("@/views/components-demo/json-editor"),
      name: "JsonEditorDemo",
      meta: { title: "JSON编辑" },
    },
    {
      path: "avatar-upload",
      component: () => import("@/views/components-demo/avatar-upload"),
      name: "AvatarUploadDemo",
      meta: { title: "上传" },
    },
    {
      path: "dropzone",
      component: () => import("@/views/components-demo/dropzone"),
      name: "DropzoneDemo",
      meta: { title: "图片降落" },
    },
    {
      path: "sticky",
      component: () => import("@/views/components-demo/sticky"),
      name: "StickyDemo",
      meta: { title: "粘性标题" },
    },
    {
      path: "count-to",
      component: () => import("@/views/components-demo/count-to"),
      name: "CountToDemo",
      meta: { title: "计数工具" },
    },
    {
      path: "back-to-top",
      component: () => import("@/views/components-demo/back-to-top"),
      name: "BackToTopDemo",
      meta: { title: "置顶" },
    },
    {
      path: "drag-dialog",
      component: () => import("@/views/components-demo/drag-dialog"),
      name: "DragDialogDemo",
      meta: { title: "拖动对话框" },
    },
    {
      path: "drag-select",
      component: () => import("@/views/components-demo/drag-select"),
      name: "DragSelectDemo",
      meta: { title: "动态多选框" },
    },
    {
      path: "dnd-list",
      component: () => import("@/views/components-demo/dnd-list"),
      name: "DndListDemo",
      meta: { title: "数据穿梭框" },
    },
    {
      path: "drag-kanban",
      component: () => import("@/views/components-demo/drag-kanban"),
      name: "DragKanbanDemo",
      meta: { title: "拖拽看板" },
    },
  ],
};

export default componentsRouter;
