const downloadQRCode = (qrCodeRef) => {
  const canvas = qrCodeRef.current.getElementsByTagName("canvas")[0];
  const url = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = url;
  link.download = "qrcode.png";
  link.click();
};

export default downloadQRCode;
