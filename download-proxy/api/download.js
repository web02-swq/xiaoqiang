export default async function handler(req, res) {
  // 你要下载的 GitHub 安装包地址
  const url = 'https://github.com/web02-swq/xiaoqiang/releases/download/electron-print-assistant/electron-print-assistant.Setup.1.0.4.exe';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).send('Failed to fetch file');
    }

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename="electron-print-assistant.Setup.1.0.4.exe"');

    // 流式返回 GitHub 文件内容
    response.body.pipe(res);
  } catch (err) {
    res.status(500).send('Proxy Error: ' + err.message);
  }
}
