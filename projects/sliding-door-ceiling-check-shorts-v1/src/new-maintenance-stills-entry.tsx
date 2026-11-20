import React from 'react';
import {registerRoot,Still} from 'remotion';
import {CaseStill,CompareStill} from './NewMaintenanceConceptsV1';
registerRoot(()=> <><Still id="CaseStill" width={1080} height={1920} component={CaseStill}/><Still id="CompareStill" width={1080} height={1920} component={CompareStill}/></>);
