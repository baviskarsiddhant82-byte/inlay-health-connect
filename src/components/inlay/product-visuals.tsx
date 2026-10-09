import { Activity, ArrowUpRight, Bell, Check, ChevronRight, ClipboardList, FileText, FlaskConical, Heart, Hospital, LayoutGrid, LockKeyhole, Pill, Settings2, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export function LogoMark() {
  return <span className="logo-mark" aria-hidden="true"><i /><i /><i /><i /></span>;
}
export function Brand({ linked = false }: { linked?: boolean }) {
  const content = <><LogoMark /><span>inlay<span className="brand-health"> health</span></span></>;
  return linked ? <a className="brand" href="#top" aria-label="Inlay Health home">{content}</a> : <span className="brand">{content}</span>;
}
export function TrendChart({ compact = false }: { compact?: boolean }) {
  return <div role="img" aria-label="Illustrative HbA1c trend from 6.2 to 5.8 percent over six months">
    <svg className="trend-chart" viewBox="0 0 350 100" preserveAspectRatio="none" aria-hidden="true">
      {[18, 48, 78].map(y => <line key={y} className="chart-grid" x1="0" x2="350" y1={y} y2={y} />)}
      <path className="chart-area" d="M5 25 L70 38 L138 35 L208 56 L276 63 L345 75 L345 95 L5 95 Z" />
      <path className="chart-line" d="M5 25 L70 38 L138 35 L208 56 L276 63 L345 75" />
      {[[5,25],[70,38],[138,35],[208,56],[276,63],[345,75]].map(([x,y]) => <circle key={x} className="chart-point" cx={x} cy={y} r="3" />)}
    </svg>
    {!compact && <div className="chart-months"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div>}
  </div>;
}
export function HeroProduct() {
  return <div className="product-window" aria-label="Illustrative Inlay Health record">
    <div className="window-top"><span className="window-dots"><i /><i /><i /></span><span className="window-url"><LockKeyhole size={9} /> Your Inlay Health record</span><span /></div>
    <div className="product-layout">
      <aside className="product-sidebar"><Brand /><div className="product-nav">
        {[{icon:LayoutGrid, label:'Overview', active:true},{icon:FileText,label:'Health records'},{icon:TrendingUp,label:'Trends & results'},{icon:Sparkles,label:'Ask Inlay'},{icon:ShieldCheck,label:'Privacy & sharing'}].map(({icon:Icon,label,active}) => <div className={`product-nav-item ${active ? 'active' : ''}`} key={label}><Icon />{label}</div>)}
      </div><div className="sidebar-bottom"><span className="avatar">AK</span><span>Alex Kim<br /><span className="text-muted-foreground">My account</span></span></div></aside>
      <div className="product-main">
        <div className="product-heading"><div><h3>Your health, connected.</h3><p>A clearer view of your records, results, and what’s next.</p></div><span className="product-label"><Check /> Records up to date</span></div>
        <div className="product-tabs"><span className="selected">Health overview</span><span>My records</span><span>Care timeline</span></div>
        <div className="product-columns"><div><div className="results-grid">
          {[['HbA1c','5.8','%','View trend'],['Blood pressure','118/78','mmHg','Latest result'],['Heart rate','68','bpm','Latest result']].map(([title,value,unit,note]) => <div className="result-item" key={title}><p>{title}</p><div className="result-value">{value}<small>{unit}</small></div><span className="result-note"><Activity size={9} /> {note}</span></div>)}
        </div><div className="trend-title">HbA1c over time <span>Last 6 months</span></div><TrendChart /><div className="source-mini"><FlaskConical /> Lab results <span>·</span> Added to your health record</div></div>
        <div><div className="ai-summary"><div className="ai-summary-title"><Sparkles size={15} /> Your health at a glance</div><p>Your HbA1c has moved from 6.2% to 5.8% over the last six months.</p><p>A follow-up test is due. Ask your doctor what this change means for you.</p><div className="ai-footnote">AI-generated summary. Review with your doctor.</div></div><div className="source-mini"><Hospital /> Hospital records</div><div className="source-mini"><Pill /> Prescriptions</div></div></div>
      </div>
    </div>
  </div>;
}
export function ConnectedTimeline() {
  return <div className="timeline-demo"><div className="demo-topline"><strong>Your health timeline</strong><span>All records <ChevronRight size={11} className="inline" /></span></div>
    {[{icon:FlaskConical,title:'Blood test results',source:'Lab report · 4 results added',date:'Sep 18'},{icon:Hospital,title:'Consultation notes',source:'Hospital record · General medicine',date:'Sep 12'},{icon:Pill,title:'Medication updated',source:'Prescription · Ready to review',date:'Sep 10'}].map(({icon:Icon,title,source,date}) => <div className="timeline-item" key={title}><span className="icon-tile"><Icon /></span><div><h4>{title}</h4><p>{source}</p></div><span>{date}</span></div>)}
    <div className="timeline-note"><Sparkles /> Your follow-up test may need attention.<ArrowUpRight size={13} className="ml-auto shrink-0" /></div>
  </div>;
}
export function PatientPreview() {
  return <div className="patient-mini"><div className="demo-topline"><span className="avatar">AK</span><ShieldCheck size={17} className="text-primary" /></div><h4>A little more clarity, Alex.</h4><p>Your health overview</p><div className="mini-trend"><div className="trend-title">HbA1c <span>5.8% · Latest result</span></div><TrendChart compact /></div><div className="mini-alert"><Bell /><div><strong>A follow-up to keep in mind</strong><p>Discuss your next blood test with your doctor.</p></div></div><div className="mini-alert"><Sparkles /><div><strong>What does my result mean?</strong><p>Ask Inlay a question about your records.</p></div></div></div>;
}
export function DoctorPreview() {
  return <div className="doctor-mini"><div className="demo-topline"><h4>Your daily overview</h4><ClipboardList size={17} className="text-primary" /></div><p>Changes that may need a closer look</p>
    {[['AK','Alex Kim','Follow-up blood test due','Follow-up'],['JL','Jordan Lee','Medication discrepancy to review','Review'],['SP','Sam Patel','New lab results available','New results']].map(([initials,name,note,status]) => <div className="doctor-row" key={name}><span className="avatar">{initials}</span><div><strong>{name}</strong><p>{note}</p></div><span>{status}</span></div>)}
    <div className="doctor-mini-footer"><ShieldCheck size={12} /> Only your clinic’s patients. Clinical decisions stay with you.</div></div>;
}
export function SharingPreview() {
  return <div className="sharing-stage"><div className="sharing-panel"><span className="icon-tile"><ShieldCheck /></span><h3>Your records. Your choice.</h3><p>See who you share with and manage your permission.</p><div className="sharing-row"><div><strong>Your care clinic</strong><p>Medical access for your care team</p></div><span className="consent-status"><Check size={12} /> Shared</span></div><div className="sharing-bottom"><LockKeyhole size={12} /> You can withdraw permission at any time.</div></div></div>;
}
