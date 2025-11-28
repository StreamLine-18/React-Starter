function KartuProps({ judul, warna, emoji }) {
  return (
    <div 
      className="p-4 rounded-xl border-2 text-center"
      style={{ borderColor: warna }}
    >
      <div className="text-4xl mb-2">{emoji}</div>
      <h3 className="font-bold text-lg" style={{ color: warna }}>
        {judul}
      </h3>
    </div>
  );
}

export default KartuProps;
