import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$n as n,Ca as r,Kr as i,Pi as a,T as o,Vr as s,_ as c,ar as l,ct as u,do as ee,fn as d,g as f,gr as te,h as p,hn as m,j as h,ki as ne,ln as re,m as g,nr as ie,p as _,pr as v,si as y,sn as b,sr as x,tn as S,ur as C,wa as w,zi as ae}from"./iframe-Ck_dG9Ja.js";import{n as oe,t as T}from"./DialogCloseIcon-CiXS-LIB.js";var E,se=e((()=>{c(),g(),E=({sx:e,...t})=>p(i,{component:`form`,sx:[{display:`flex`,flexDirection:`column`,minHeight:0,overflow:`hidden`},...Array.isArray(e)?e:[e]],...t});try{E.displayName=`DialogForm`,E.__docgenInfo={description:`Form wrapper for a Dialog's children: restores the Paper's flex column that a plain <form>
breaks. Without it the whole paper scrolls (title and close button included) instead of the
DialogContent, and the actions bar leaves the viewport.
Use it whenever a form element must sit between the Dialog and its DialogContent/DialogActions
(e.g. form libraries owning the submit).`,displayName:`DialogForm`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Dialog/DialogForm/DialogForm.tsx`,methods:[],props:{fontWeight:{defaultValue:null,description:``,name:`fontWeight`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)`}},left:{defaultValue:null,description:``,name:`left`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Left<string | number> | readonly NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},right:{defaultValue:null,description:``,name:`right`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Right<string | number> | readonly NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},top:{defaultValue:null,description:``,name:`top`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Top<string | number> | readonly NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},bottom:{defaultValue:null,description:``,name:`bottom`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Bottom<string | number> | readonly NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},color:{defaultValue:null,description:``,name:`color`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Color>)`}},p:{defaultValue:null,description:``,name:`p`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Padding<string | number> | readonly NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},height:{defaultValue:null,description:``,name:`height`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Height<string | number> | readonly NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},border:{defaultValue:null,description:``,name:`border`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<number | "hidden" | (string & {}) | "inset" | "none" | "inherit" | "medium" | "dashed" | "black" | "white" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | ... 198 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},boxShadow:{defaultValue:null,description:``,name:`boxShadow`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)`}},zIndex:{defaultValue:null,description:``,name:`zIndex`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)`}},alignContent:{defaultValue:null,description:``,name:`alignContent`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignContent>)`}},alignItems:{defaultValue:null,description:``,name:`alignItems`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignItems>)`}},alignSelf:{defaultValue:null,description:``,name:`alignSelf`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignSelf>)`}},boxSizing:{defaultValue:null,description:``,name:`boxSizing`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<BoxSizing | readonly NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},columnGap:{defaultValue:null,description:``,name:`columnGap`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<ColumnGap<string | number> | readonly NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},display:{defaultValue:null,description:``,name:`display`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Display>)`}},flexBasis:{defaultValue:null,description:``,name:`flexBasis`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<FlexBasis<string | number> | readonly NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},flexDirection:{defaultValue:null,description:``,name:`flexDirection`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<FlexDirection | readonly NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},flexGrow:{defaultValue:null,description:``,name:`flexGrow`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<FlexGrow | readonly NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},flexShrink:{defaultValue:null,description:``,name:`flexShrink`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<FlexShrink | readonly NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},flexWrap:{defaultValue:null,description:``,name:`flexWrap`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<FlexWrap | readonly NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},fontFamily:{defaultValue:null,description:``,name:`fontFamily`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | FontFamily>)`}},fontSize:{defaultValue:null,description:``,name:`fontSize`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<FontSize<string | number> | readonly NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},fontStyle:{defaultValue:null,description:``,name:`fontStyle`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | FontStyle>)`}},gridAutoColumns:{defaultValue:null,description:``,name:`gridAutoColumns`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<GridAutoColumns<string | number> | readonly NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},gridAutoFlow:{defaultValue:null,description:``,name:`gridAutoFlow`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | GridAutoFlow>)`}},gridAutoRows:{defaultValue:null,description:``,name:`gridAutoRows`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<GridAutoRows<string | number> | readonly NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},gridTemplateAreas:{defaultValue:null,description:``,name:`gridTemplateAreas`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | GridTemplateAreas>)`}},gridTemplateColumns:{defaultValue:null,description:``,name:`gridTemplateColumns`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<GridTemplateColumns<string | number> | readonly NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},gridTemplateRows:{defaultValue:null,description:``,name:`gridTemplateRows`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<GridTemplateRows<string | number> | readonly NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},justifyContent:{defaultValue:null,description:``,name:`justifyContent`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifyContent>)`}},justifyItems:{defaultValue:null,description:``,name:`justifyItems`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifyItems>)`}},justifySelf:{defaultValue:null,description:``,name:`justifySelf`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifySelf>)`}},letterSpacing:{defaultValue:null,description:``,name:`letterSpacing`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<LetterSpacing<string | number> | readonly NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},lineHeight:{defaultValue:null,description:``,name:`lineHeight`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<LineHeight<string | number> | readonly NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginBlockEnd:{defaultValue:null,description:``,name:`marginBlockEnd`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginBlockEnd<string | number> | readonly NonNullable<MarginBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginBlockStart:{defaultValue:null,description:``,name:`marginBlockStart`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginBlockStart<string | number> | readonly NonNullable<MarginBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginBottom:{defaultValue:null,description:``,name:`marginBottom`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginBottom<string | number> | readonly NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginInlineEnd:{defaultValue:null,description:``,name:`marginInlineEnd`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginInlineEnd<string | number> | readonly NonNullable<MarginInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginInlineStart:{defaultValue:null,description:``,name:`marginInlineStart`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginInlineStart<string | number> | readonly NonNullable<MarginInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginLeft:{defaultValue:null,description:``,name:`marginLeft`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginRight:{defaultValue:null,description:``,name:`marginRight`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginRight<string | number> | readonly NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginTop:{defaultValue:null,description:``,name:`marginTop`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},maxHeight:{defaultValue:null,description:``,name:`maxHeight`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MaxHeight<string | number> | readonly NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},maxWidth:{defaultValue:null,description:``,name:`maxWidth`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MaxWidth<string | number> | readonly NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},minHeight:{defaultValue:null,description:``,name:`minHeight`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MinHeight<string | number> | readonly NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},minWidth:{defaultValue:null,description:``,name:`minWidth`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MinWidth<string | number> | readonly NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},order:{defaultValue:null,description:``,name:`order`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Order | readonly NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | readonly NonNullable<...>[] | undefined>)`}},paddingBlockEnd:{defaultValue:null,description:``,name:`paddingBlockEnd`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingBlockEnd<string | number> | readonly NonNullable<PaddingBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingBlockStart:{defaultValue:null,description:``,name:`paddingBlockStart`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingBlockStart<string | number> | readonly NonNullable<PaddingBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingBottom:{defaultValue:null,description:``,name:`paddingBottom`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingBottom<string | number> | readonly NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingInlineEnd:{defaultValue:null,description:``,name:`paddingInlineEnd`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingInlineEnd<string | number> | readonly NonNullable<PaddingInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingInlineStart:{defaultValue:null,description:``,name:`paddingInlineStart`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingInlineStart<string | number> | readonly NonNullable<PaddingInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingLeft:{defaultValue:null,description:``,name:`paddingLeft`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingRight:{defaultValue:null,description:``,name:`paddingRight`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingRight<string | number> | readonly NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingTop:{defaultValue:null,description:``,name:`paddingTop`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},position:{defaultValue:null,description:``,name:`position`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Position | readonly NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},rowGap:{defaultValue:null,description:``,name:`rowGap`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<RowGap<string | number> | readonly NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},textAlign:{defaultValue:null,description:``,name:`textAlign`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<TextAlign | readonly NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},textOverflow:{defaultValue:null,description:``,name:`textOverflow`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | TextOverflow>)`}},textTransform:{defaultValue:null,description:``,name:`textTransform`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | TextTransform> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | TextTransform>)`}},visibility:{defaultValue:null,description:``,name:`visibility`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Visibility | readonly NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},whiteSpace:{defaultValue:null,description:``,name:`whiteSpace`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | WhiteSpace> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | WhiteSpace>)`}},width:{defaultValue:null,description:``,name:`width`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Width<string | number> | readonly NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},borderBottom:{defaultValue:null,description:``,name:`borderBottom`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<BorderBottom<string | number> | readonly NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},borderColor:{defaultValue:null,description:``,name:`borderColor`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | BorderColor>)`}},borderLeft:{defaultValue:null,description:``,name:`borderLeft`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<BorderLeft<string | number> | readonly NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},borderRadius:{defaultValue:null,description:``,name:`borderRadius`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<BorderRadius<string | number> | readonly NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},borderRight:{defaultValue:null,description:``,name:`borderRight`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<BorderRight<string | number> | readonly NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},borderTop:{defaultValue:null,description:``,name:`borderTop`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<BorderTop<string | number> | readonly NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},flex:{defaultValue:null,description:``,name:`flex`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Flex<string | number> | readonly NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},gap:{defaultValue:null,description:``,name:`gap`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Gap<string | number> | readonly NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},gridArea:{defaultValue:null,description:``,name:`gridArea`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<GridArea | readonly NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},gridColumn:{defaultValue:null,description:``,name:`gridColumn`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<GridColumn | readonly NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},gridRow:{defaultValue:null,description:``,name:`gridRow`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<GridRow | readonly NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | readonly NonNullable<...>[] | undefined>)`}},margin:{defaultValue:null,description:``,name:`margin`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Margin<string | number> | readonly NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginBlock:{defaultValue:null,description:``,name:`marginBlock`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginBlock<string | number> | readonly NonNullable<MarginBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginInline:{defaultValue:null,description:``,name:`marginInline`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginInline<string | number> | readonly NonNullable<MarginInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},overflow:{defaultValue:null,description:``,name:`overflow`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Overflow>)`}},padding:{defaultValue:null,description:``,name:`padding`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Padding<string | number> | readonly NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingBlock:{defaultValue:null,description:``,name:`paddingBlock`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingBlock<string | number> | readonly NonNullable<PaddingBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingInline:{defaultValue:null,description:``,name:`paddingInline`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingInline<string | number> | readonly NonNullable<PaddingInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},bgcolor:{defaultValue:null,description:``,name:`bgcolor`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | BackgroundColor>)`}},m:{defaultValue:null,description:``,name:`m`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<Margin<string | number> | readonly NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},mt:{defaultValue:null,description:``,name:`mt`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},mr:{defaultValue:null,description:``,name:`mr`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginRight<string | number> | readonly NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},mb:{defaultValue:null,description:``,name:`mb`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginBottom<string | number> | readonly NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},ml:{defaultValue:null,description:``,name:`ml`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},mx:{defaultValue:null,description:``,name:`mx`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginX:{defaultValue:null,description:``,name:`marginX`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},my:{defaultValue:null,description:``,name:`my`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},marginY:{defaultValue:null,description:``,name:`marginY`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},pt:{defaultValue:null,description:``,name:`pt`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},pr:{defaultValue:null,description:``,name:`pr`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingRight<string | number> | readonly NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},pb:{defaultValue:null,description:``,name:`pb`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingBottom<string | number> | readonly NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},pl:{defaultValue:null,description:``,name:`pl`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},px:{defaultValue:null,description:``,name:`px`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingX:{defaultValue:null,description:``,name:`paddingX`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},py:{defaultValue:null,description:``,name:`py`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},paddingY:{defaultValue:null,description:``,name:`paddingY`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)`}},typography:{defaultValue:null,description:``,name:`typography`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)`}},displayPrint:{defaultValue:null,description:``,name:`displayPrint`,required:!1,tags:{},type:{name:`ResponsiveStyleValue<readonly string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Display>)`}}},tags:{}}}catch{}})),D,ce=e((()=>{c(),g(),D=e=>p(te,{...e});try{D.displayName=`Dialog`,D.__docgenInfo={description:``,displayName:`Dialog`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Dialog/stories/Dialog.tsx`,methods:[],props:{backgroundColor:{defaultValue:null,declarations:[{fileName:`design-system/src/config/theme.tsx`,name:`DialogProps`}],description:``,name:`backgroundColor`,parent:{fileName:`design-system/src/config/theme.tsx`,name:`DialogProps`},required:!1,tags:{},type:{name:`string`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Modal/Modal.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<DialogSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DialogRootSlotPropsOverrides, DialogOwnerState>; backdrop?: SlotProps<...>; container?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; paper?: SlotProps<...> | undefined; } | undefined`}}},tags:{}}}catch{}})),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),r(),O=t(ee(),1),oe(),se(),ce(),g(),k={mobile:{name:`Mobile`,styles:{height:`600px`,width:`480px`}}},A=[`username@gmail.com`,`user02@gmail.com`],j=(0,O.forwardRef)((e,t)=>p(n,{direction:`up`,ref:t,...e,children:e.children})),M=e=>{let{onClose:t,selectedValue:n,open:r}=e,i=()=>{t(n)},a=e=>{t(e)};return f(D,{onClose:i,open:r,children:[p(l,{children:`Set backup account`}),f(m,{sx:{pt:0},children:[A.map(e=>f(d,{onClick:()=>a(e),children:[p(b,{children:p(y,{sx:{backgroundColor:w[100],color:w[600]}})}),p(S,{primary:e})]},e)),f(d,{autoFocus:!0,onClick:()=>a(`addAccount`),children:[p(b,{children:p(y,{children:`+`})}),p(S,{primary:`Add account`})]})]})]})},N=({TransitionComponent:e,...t},{parameters:n})=>{let[r,i]=(0,O.useState)(!0),a=()=>{i(!0)},o=()=>{i(!1)};return f(u,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[p(s,{variant:`outlined`,onClick:a,children:`Open alert dialog`}),f(D,{...t,open:r,onClose:o,"aria-labelledby":`alert-dialog-title`,"aria-describedby":`alert-dialog-description`,TransitionComponent:e||void 0,children:[p(l,{id:`alert-dialog-title`,children:`Use Google location service?`}),p(C,{children:p(x,{id:`alert-dialog-description`,children:`Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`})}),f(v,{children:[p(s,{onClick:o,variant:n?.variantButton,size:n?.sizeButton,children:`Disagree`}),p(s,{onClick:o,variant:n?.variantButton,size:n?.sizeButton,children:`Agree`})]})]})]})},P=()=>{let[e,t]=(0,O.useState)(!0),[n,r]=(0,O.useState)(A[1]);return f(u,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[f(a,{variant:`subtitle1`,component:`div`,children:[`Selected: `,n]}),p(`br`,{}),p(s,{variant:`outlined`,onClick:()=>{t(!0)},children:`Open simple dialog`}),p(M,{selectedValue:n,open:e,onClose:e=>{t(!1),r(e)}})]})},F=e=>{let[t,n]=(0,O.useState)(!0),r=()=>{n(!0)},i=()=>{n(!1)};return f(u,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[p(s,{variant:`outlined`,onClick:r,children:`Open full-screen dialog`}),f(D,{...e,open:t,onClose:i,TransitionComponent:j,children:[p(ne,{sx:{position:`fixed`},children:f(h,{children:[p(ae,{edge:`start`,color:`inherit`,onClick:i,"aria-label":`close`,children:`X`}),p(a,{sx:{flex:1,ml:2},variant:`h6`,component:`div`,children:`Sound`}),p(s,{autoFocus:!0,color:`inherit`,onClick:i,children:`save`})]})}),f(m,{children:[p(d,{children:p(S,{primary:`Phone ringtone`,secondary:`Titania`})}),p(ie,{}),p(re,{children:p(S,{primary:`Default notification ringtone`,secondary:`Tethys`})})]})]})]})},I=({...e},{parameters:t})=>{let[n,r]=(0,O.useState)(!0),i=()=>{r(!0)},a=()=>{r(!1)};return f(u,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[p(s,{variant:`outlined`,onClick:i,children:`Open alert dialog`}),f(D,{...e,open:n,onClose:a,"aria-labelledby":`alert-dialog-title`,"aria-describedby":`alert-dialog-description`,children:[p(T,{onClick:a}),p(l,{id:`alert-dialog-title`,children:`Use Google location service?`}),p(C,{children:p(x,{id:`alert-dialog-description`,children:`Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`})}),f(v,{children:[p(s,{onClick:a,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),p(s,{onClick:a,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},L=N.bind({}),L.args={},R=N.bind({}),R.args={},R.parameters={viewport:{defaultViewport:`mobile`,viewports:k}},z=N.bind({}),z.args={TransitionComponent:j},B=N.bind({}),B.parameters={variantButton:`outlined`},V=N.bind({}),V.parameters={variantButton:`contained`},H=P.bind({}),H.args={},U=F.bind({}),U.args={fullScreen:!0},W=N.bind({}),W.parameters={sizeButton:`small`},G=I.bind({}),G.args={},K=e=>{let[t,n]=(0,O.useState)(!0);return f(_,{children:[p(s,{variant:`outlined`,onClick:()=>n(!0),children:`Open dialog`}),f(D,{fullWidth:!0,maxWidth:`sm`,open:t,onClose:()=>n(!1),children:[p(T,{onClick:()=>n(!1)}),p(l,{children:`Long form`}),p(C,{children:Array.from({length:12},(e,t)=>f(x,{paragraph:!0,children:[`Scrollable content block `,t+1,` — the actions bar below sticks to the bottom of the dialog while this content scrolls underneath it.`]},t))}),f(v,{...e,children:[p(s,{variant:`outlined`,color:`inherit`,onClick:()=>n(!1),children:`Cancel`}),p(s,{variant:`contained`,onClick:()=>n(!1),children:`Save`})]})]})]})},q=()=>{let[e,t]=(0,O.useState)(!0);return f(_,{children:[p(s,{variant:`outlined`,onClick:()=>t(!0),children:`Open form dialog`}),f(D,{fullWidth:!0,maxWidth:`sm`,open:e,onClose:()=>t(!1),children:[p(T,{onClick:()=>t(!1)}),f(E,{onSubmit:e=>{e.preventDefault(),t(!1)},children:[p(l,{children:`Long form`}),p(C,{children:p(u,{spacing:3,paddingTop:1,children:Array.from({length:10},(e,t)=>p(o,{fullWidth:!0,label:`Field ${t+1}`},t))})}),f(v,{variant:`sticky`,children:[p(s,{variant:`outlined`,color:`inherit`,onClick:()=>t(!1),children:`Cancel`}),p(s,{variant:`contained`,type:`submit`,children:`Save`})]})]})]})]})},J=q.bind({}),Y=K.bind({}),Y.args={variant:`sticky`},X=K.bind({}),X.args={variant:`sticky-flat`},Z=N.bind({}),Z.args={backgroundColor:`secondary`},Q={component:D,title:`Components/Feedback/Dialog`},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState(emails[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Stack>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} TransitionComponent={TransitionSample}>
        <AppBar sx={{
        position: "fixed"
      }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              X
            </IconButton>
            <Typography sx={{
            flex: 1,
            ml: 2
          }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItem>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </Stack>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`({
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogCloseIcon onClick={handleClose} />
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open form dialog
      </Button>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={() => setOpen(false)}>
        <DialogCloseIcon onClick={() => setOpen(false)} />
        {/* DialogForm restores the Paper's flex column a plain <form> breaks: the content scrolls,
            the title and the actions stay in place. */}
        <DialogForm onSubmit={event => {
        event.preventDefault();
        setOpen(false);
      }}>
          <DialogTitle>Long form</DialogTitle>
          <DialogContent>
            <Stack spacing={3} paddingTop={1}>
              {Array.from({
              length: 10
            }, (_, index) => <TextField key={index} fullWidth label={\`Field \${index + 1}\`} />)}
            </Stack>
          </DialogContent>
          <DialogActions variant="sticky">
            <Button variant="outlined" color="inherit" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </DialogActions>
        </DialogForm>
      </Dialog>
    </>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={() => setOpen(false)}>
        <DialogCloseIcon onClick={() => setOpen(false)} />
        <DialogTitle>Long form</DialogTitle>
        <DialogContent>
          {Array.from({
          length: 12
        }, (_, index) => <DialogContentText key={index} paragraph>
              Scrollable content block {index + 1} — the actions bar below sticks to the bottom of the dialog while this content scrolls
              underneath it.
            </DialogContentText>)}
        </DialogContent>
        <DialogActions {...args}>
          <Button variant="outlined" color="inherit" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={() => setOpen(false)}>
        <DialogCloseIcon onClick={() => setOpen(false)} />
        <DialogTitle>Long form</DialogTitle>
        <DialogContent>
          {Array.from({
          length: 12
        }, (_, index) => <DialogContentText key={index} paragraph>
              Scrollable content block {index + 1} — the actions bar below sticks to the bottom of the dialog while this content scrolls
              underneath it.
            </DialogContentText>)}
        </DialogContent>
        <DialogActions {...args}>
          <Button variant="outlined" color="inherit" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...Z.parameters?.docs?.source}}},$=[`Basic`,`BasicMobile`,`BasicWithTransition`,`DialogActionsOutlined`,`DialogActionsContained`,`WithList`,`FullScreen`,`SmallActionsButton`,`WithDialogCloseIcon`,`WithFormWrapper`,`StickyActions`,`StickyFlatActions`,`BackgroundSecondary`]}))();export{Z as BackgroundSecondary,L as Basic,R as BasicMobile,z as BasicWithTransition,V as DialogActionsContained,B as DialogActionsOutlined,U as FullScreen,W as SmallActionsButton,Y as StickyActions,X as StickyFlatActions,G as WithDialogCloseIcon,J as WithFormWrapper,H as WithList,$ as __namedExportsOrder,Q as default};