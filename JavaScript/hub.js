const loadData = async () => {
   const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);

   const data = await res.json();
   const tools = data.data.tools;
   loadDataPage(tools);
};
const loadDataPage = (tools) => {
   const toolsContainer = document.getElementById("tools-container");
   tools.forEach((tool) => {
      // console.log(tool.features);
      const toolDiv = document.createElement("div");
      toolDiv.classList = `card bg-gray-100 border shadow-xl m-3`;
      toolDiv.innerHTML = `<figure class="pt-6 px-5" >
    <img src="${tool.image}" alt="AI Image" />
 </figure>
 <div class="card-body">
    <h2 class="text-2xl font-bold">Features</h2>
    <ol class="border-b pb-4">
    <li></li>
    ${li = tool.features.map(li => li,' ') }
    </ol>
<div class="flex justify-between items-center">
<div>
<h2 class="text-2xl font-bold">${tool.name}</h2>
<p class="flex items-center gap-2"><img src="/IMAGE/date.png" alt"Date/>  <span>${
         tool.published_in
      }</span></p>
</div>
  <div onclick="loadModalData('${tool.id}')" class="text-end">
     <img
        class="badge rounded-md"
        src="/IMAGE/Frame.png"
        alt=""
     />
  </div></div>
 </div>`;
      toolsContainer.appendChild(toolDiv);
   });
};
const loadModalData = async (id) => {
   const res = await fetch(
      `https://openapi.programming-hero.com/api/ai/tool/${id}`
   );
   const data = await res.json();
   const tool = data.data;
   loadModalDetails(tool);
   console.log(tool);
};
const loadModalDetails = (tool) => {
console.log(tool.pricing)
   const modalId = document.getElementById("detialsAI");
   modalId.innerHTML = `<div>
   <div 
      class="grid grid-cols-1 lg:grid-cols-2 justify-between gap-5 "
   >
      <div
         class="rounded-xl p-6 bg-red-50"
      >
         <p class="text-lg font-bold pb-5">
          ${tool.description}
         </p>
         <div class="flex flex-wrap justify-between gap-3">
            <div class="bg-white p-5 rounded-xl text-green-500 font-semibold">${tool.pricing[0].price}</div>
            <div class="bg-white p-5 rounded-xl  text-red-500 font-semibold">${
               tool.pricing[1].price
            }</div>
            <div class="bg-white p-5 rounded-xl  text-red-500 font-semibold">${
               tool.pricing[2].price
            }</div>
         </div>
         <div class="flex justify-between items-center mt-5">
            <div>
               <h4 class="text-lg font-bold">Features</h4>
               <ol class="list-disc ml-4">
                  <li>${tool.features[1].feature_name}</li>
                  <li>${tool.features[2].feature_name}</li>
                  <li>${tool.features[3].feature_name}</li>
               </ol>
            </div>

            <div>
               <h4 class="text-lg font-bold">Integrations</h4>
               <ol class="list-disc ml-4">
                  <li>${tool?.integrations[0] || "No data availavle"}</li>
                  <li>${tool?.integrations[1] || "No data availavle"}</li>
                  <li>${tool?.integrations[2] || "No data availavle"}</li>
               </ol>
            </div>
         </div>
      </div>
      <div class="rounded-xl  p-6">
         <div>
            <img src="${tool.image_link[0]?tool.image_link[0]:'no'}" alt="AI image" />
         </div>
         <div class="mt-6">
            <h3 class="text-xl font-bold">
               ${tool.input_output_examples[0].input}
            </h3>
            <p>Ans:
            ${tool.input_output_examples[0].output}
            <h3 class="text-xl font-bold">
            ${tool.input_output_examples[1].input}
         </h3>
         <p>Ans:
         ${tool.input_output_examples[1].output}
         </p>
            </p>
         </div>
      </div>
   </div>
   <div class="modal-action">
      <form method="dialog">
         <!-- if there is a button in form, it will close the modal -->
         <button
            class="badge badge-error rounded-full btn-sm text-lg text-white"
         >
            X
         </button>
      </form>
   </div>
</div>`;
   detialsAI.showModal(tool);
};
loadData();
/*     <ol class="border-b pb-4">
       <li>1.${tool.features[0]}</li>
       <li>2.${tool.features[1]}</li>
       <li>3.${tool.features[2]}</li>
    </ol> */