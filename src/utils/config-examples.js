export const baseJson = `{
  "version": "1.0.15",
  "name": "My config",
  "description": "Test",
  "datasets": [],
  "coordinationSpace": {},
  "layout": [],
  "initStrategy": "auto"
}`;

export const exampleConfig = {
	version: "1.0.15",
	name: "VitessceLink Demo",
	description: "Test",
	datasets: [
		{
			uid: "A",
			name: "My dataset",
			files: [
				{
					fileType: "image.ome-tiff",
					url: "https://data-2.vitessce.io/data/redBloodCell.ome.tiff",
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
