<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap – Creativity Beyond Thought</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0a0a0a; color: #e4e4e7; padding: 40px 20px; }
          h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; background: linear-gradient(135deg, #fff 0%, #a1a1aa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          p { color: #71717a; margin-bottom: 32px; }
          table { width: 100%; max-width: 900px; border-collapse: collapse; }
          th { text-align: left; padding: 12px 16px; background: #18181b; border-bottom: 1px solid #27272a; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #71717a; }
          td { padding: 12px 16px; border-bottom: 1px solid #18181b; font-size: 0.875rem; }
          a { color: #a78bfa; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .priority { font-weight: 600; }
          .high { color: #22c55e; }
          .mid { color: #f59e0b; }
          .low { color: #71717a; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p>Creativity Beyond Thought — <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs indexed</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Freq</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td>
                <xsl:attribute name="class">
                  priority
                  <xsl:choose>
                    <xsl:when test="sitemap:priority >= 0.8">high</xsl:when>
                    <xsl:when test="sitemap:priority >= 0.5">mid</xsl:when>
                    <xsl:otherwise>low</xsl:otherwise>
                  </xsl:choose>
                </xsl:attribute>
                <xsl:value-of select="sitemap:priority"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
