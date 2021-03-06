#version 460

layout(location = 0) flat in float A;
layout(location = 0) out uint SV_Target;

void main()
{
    SV_Target = packHalf2x16(vec2(A, 0.0));
}


#if 0
// SPIR-V disassembly
; SPIR-V
; Version: 1.3
; Generator: Unknown(30017); 21022
; Bound: 19
; Schema: 0
OpCapability Shader
%12 = OpExtInstImport "GLSL.std.450"
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %3 "main" %7 %10
OpExecutionMode %3 OriginUpperLeft
OpName %3 "main"
OpName %7 "A"
OpName %10 "SV_Target"
OpDecorate %7 Flat
OpDecorate %7 Location 0
OpDecorate %10 Location 0
%1 = OpTypeVoid
%2 = OpTypeFunction %1
%5 = OpTypeFloat 32
%6 = OpTypePointer Input %5
%7 = OpVariable %6 Input
%8 = OpTypeInt 32 0
%9 = OpTypePointer Output %8
%10 = OpVariable %9 Output
%14 = OpConstant %5 0
%15 = OpTypeVector %5 2
%3 = OpFunction %1 None %2
%4 = OpLabel
OpBranch %17
%17 = OpLabel
%11 = OpLoad %5 %7
%16 = OpCompositeConstruct %15 %11 %14
%13 = OpExtInst %8 %12 PackHalf2x16 %16
OpStore %10 %13
OpReturn
OpFunctionEnd
#endif
