import { useState } from 'react';
import { View, Button } from 'react-native';
import SparkSketch from './src/SparkSketch';
import ScriptFlow from './src/ScriptFlow';
import AetherPro from './src/AetherPro';
export default function App() {
  const [mode, setMode] = useState('pro');
  return <View style={{flex:1}}>
    {mode==='sketch'&&<SparkSketch/>}
    {mode==='script'&&<ScriptFlow/>}
    {mode==='pro'&&<AetherPro/>}
    <Button title="Sketch" onPress={()=>setMode('sketch')}/>
    <Button title="Script" onPress={()=>setMode('script')}/>
    <Button title="Pro" onPress={()=>setMode('pro')}/>
  </View>;
}
