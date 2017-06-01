let Scorocode = window.Scorocode;

export let init = () => {
	Scorocode.Init({
		ApplicationID: "3196b2e873234547ad8b06ed636d3538",
		JavaScriptKey: "5e85f685a23e44e6abad95accc1dd2ea",
		MasterKey: "659d718ff9664f6fafbdb79efc93cb34"
	});
};

export async function buildings() {
	init();
	let buildings = new Scorocode.Query("buildings");
	let data = await buildings.find();
	return data;
}

export async function equipment() {
	init();
	let equipment = new Scorocode.Query("equipment");
	let data = await equipment.find();
	return data;
}

export async function buildingsById(id) {
	init();
	let buildings = new Scorocode.Object("buildings");
	let data = await buildings.getById(id);
	return data;
}

export async function remove(id) {
	init();
	let equip = new Scorocode.Object("equipment");
	let item = await equip.getById(id);
	let result = await equip.remove(item);
	return result;
}

export async function update(item) {
	let equip = new Scorocode.Object("equipment");
	let set = await equip.set("_id", item._id)
						 .set("name", item.name)
						 .set("count", Number(item.count));
	let save = await equip.save();
	return save;
}

export async function add(data) {
	let comp = new Scorocode.Object("equipment");
	let set = await comp.set("name", data.name)
						.set("room", data.id)
						.set("count", Number(data.count));
	let save = await comp.save();
	return save;
}
