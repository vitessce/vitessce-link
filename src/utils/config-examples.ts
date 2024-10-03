export interface CoordinationSpace {
	[key: string]: { [key: string]: any };
}

export interface File {
	fileType: string;
	url: string;
	options?: { [key: string]: string };
	coordinationValues: { [key: string]: string };
}

export interface Dataset {
	uid: string;
	name: string;
	files: File[];
}

export interface Layout {
	component: string;
	props?: { [key: string]: any };
	x: number;
	y: number;
	w: number;
	h: number;
	coordinationScopes?: { [key: string]: any };
}

export interface Config {
	version: string;
	name: string;
	description?: string;
	datasets: Dataset[];
	coordinationSpace: CoordinationSpace;
	layout: Layout[];
	initStrategy: string;
}

export const baseJson: Config = {
	version: "1.0.15",
	name: "My config",
	description: "Test",
	datasets: [],
	coordinationSpace: {},
	layout: [],
	initStrategy: "auto",
};

export const exampleConfigEditor: Config = {
	version: "1.0.16",
	name: "Vitessce Link Demo",
	description: "Test",
	datasets: [
		{
			uid: "A",
			name: "My dataset",
			files: [
				{
					fileType: "image.ome-tiff",
					url: "https://data-2.vitessce.io/data/redBloodCell.ome.tiff",
					options: {
						offsetsUrl:
							"https://data-2.vitessce.io/data/redBloodCell.offsets.json",
					},
					coordinationValues: {
						fileUid: "file",
					},
				},
			],
		},
	],
	coordinationSpace: {
		dataset: {
			A: "A",
		},
		spatialTargetZ: {
			A: 0,
		},
		spatialTargetT: {
			A: 0,
		},
		imageLayer: {
			A: "__dummy__",
		},
		fileUid: {
			A: "file",
		},
		spatialLayerOpacity: {
			A: 1,
		},
		photometricInterpretation: {
			A: "BlackIsZero",
		},
		spatialTargetResolution: {
			A: null,
		},
		imageChannel: {
			A: "__dummy__",
		},
		spatialTargetC: {
			A: 0,
		},
		spatialChannelVisible: {
			A: true,
		},
		spatialChannelOpacity: {
			A: 1,
		},
		metaCoordinationScopes: {
			A: {
				spatialTargetZ: "A",
				spatialTargetT: "A",
				imageLayer: ["A"],
			},
		},
		metaCoordinationScopesBy: {
			A: {
				imageLayer: {
					fileUid: {
						A: "A",
					},
					spatialLayerOpacity: {
						A: "A",
					},
					photometricInterpretation: {
						A: "A",
					},
					spatialTargetResolution: {
						A: "A",
					},
					imageChannel: {
						A: ["A"],
					},
				},
				imageChannel: {
					spatialTargetC: {
						A: "A",
					},
					spatialChannelVisible: {
						A: "A",
					},
					spatialChannelOpacity: {
						A: "A",
					},
				},
			},
		},
	},
	layout: [
		{
			component: "spatialBeta",
			props: {
				three: true,
			},
			x: 0,
			y: 0,
			w: 8,
			h: 8,
			coordinationScopes: {
				dataset: "A",
				metaCoordinationScopes: ["A"],
				metaCoordinationScopesBy: ["A"],
			},
		},
		{
			component: "layerControllerBeta",
			x: 8,
			y: 0,
			w: 4,
			h: 6,
			coordinationScopes: {
				dataset: "A",
				metaCoordinationScopes: ["A"],
				metaCoordinationScopesBy: ["A"],
			},
		},
		{
			component: "linkController",
			props: {
				linkID: 1234,
				send: true,
				receive: true,
			},
			x: 8,
			y: 1,
			w: 4,
			h: 2,
			coordinationScopes: {
				dataset: "A",
				metaCoordinationScopes: ["A"],
				metaCoordinationScopesBy: ["A"],
			},
		},
	],
	initStrategy: "auto",
};

export const exampleConfigHeadset: Config = {
	version: "1.0.16",
	name: "Link controller demo",
	datasets: [
		{
			uid: "A",
			name: "My dataset",
			files: [
				{
					fileType: "image.ome-tiff",
					url: "https://data-2.vitessce.io/data/redBloodCell.ome.tiff",
					options: {
						offsetsUrl:
							"https://data-2.vitessce.io/data/redBloodCell.offsets.json",
					},
					coordinationValues: {
						fileUid: "file",
					},
				},
			],
		},
	],
	coordinationSpace: {
		dataset: {
			A: "A",
		},
	},
	layout: [
		{
			component: "linkController",
			props: {
				linkID: 1234,
			},
			x: 0,
			y: 0,
			w: 3,
			h: 8,
			coordinationScopes: {
				dataset: "A",
			},
		},
	],
	initStrategy: "auto",
};
