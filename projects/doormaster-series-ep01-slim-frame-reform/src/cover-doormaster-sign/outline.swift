import Foundation
import CoreText
import CoreGraphics
let args=CommandLine.arguments
let url=URL(fileURLWithPath:args[1]);CTFontManagerRegisterFontsForURL(url as CFURL,.process,nil)
let desc=(CTFontManagerCreateFontDescriptorsFromURL(url as CFURL)! as NSArray)[0] as! CTFontDescriptor
let text=args[2],size=Double(args[3])!,kern=Double(args[4])!
let font=CTFontCreateWithFontDescriptor(desc,size,nil)
let attr=NSAttributedString(string:text,attributes:[NSAttributedString.Key(kCTFontAttributeName as String):font,NSAttributedString.Key(kCTKernAttributeName as String):kern])
let line=CTLineCreateWithAttributedString(attr)
var all=""
func p(_ x:CGFloat)->String {return String(format:"%.3f",Double(x))}
for obj in CTLineGetGlyphRuns(line) as NSArray {
 let run=obj as! CTRun;let count=CTRunGetGlyphCount(run)
 var glyphs=[CGGlyph](repeating:0,count:count),pos=[CGPoint](repeating:.zero,count:count)
 CTRunGetGlyphs(run,CFRange(location:0,length:0),&glyphs);CTRunGetPositions(run,CFRange(location:0,length:0),&pos)
 for i in 0..<count {if let path=CTFontCreatePathForGlyph(font,glyphs[i],nil){let x=pos[i].x,y=pos[i].y
 path.applyWithBlock{ ep in let e=ep.pointee;func xy(_ j:Int)->String{return p(e.points[j].x+x)+" "+p(-e.points[j].y-y)}
 switch e.type {case .moveToPoint:all += "M"+xy(0);case .addLineToPoint:all += "L"+xy(0);case .addQuadCurveToPoint:all += "Q"+xy(0)+" "+xy(1);case .addCurveToPoint:all += "C"+xy(0)+" "+xy(1)+" "+xy(2);case .closeSubpath:all += "Z";@unknown default:break}
 }}}
}
let data:[String:Any] = ["path":all,"advance":CTLineGetTypographicBounds(line,nil,nil,nil),"font":CTFontCopyPostScriptName(font) as String]
print(String(data:try! JSONSerialization.data(withJSONObject:data),encoding:.utf8)!)
