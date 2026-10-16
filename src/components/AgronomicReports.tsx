import styles from "./AgronomicReports.module.css";

const reports = [
  {
    icon: "🍅",
    crop: "Tomato",
    title: "Agronomic Practices & Cultivation Yield Report - Tomato",
    description:
      "Download the 2026 agronomic report covering tomato cultivation practices and expected yield.",
    file: "/docs/agronomic-tomato.pdf",
    download: "Agrolocale agronomic practices and cultivation yield report - Tomato.pdf",
  },
  {
    icon: "🌶️",
    crop: "Pepper",
    title: "Agronomic Practices & Cultivation Yield Report - Pepper",
    description:
      "Download the 2026 agronomic report covering pepper cultivation practices and expected yield.",
    file: "/docs/agronomic-pepper.pdf",
    download: "Agrolocale agronomic practices and cultivation yield report - Pepper.pdf",
  },
];

export default function AgronomicReports() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>2026 AGRONOMIC REPORTS</span>

            <h2>
                Agrolocale’s 2026 Agronomic Reports for{" "}
                <span>Tomato & Pepper Cultivation</span>
            </h2>

          <p>
            Access our 2026 crop reports for practical information on
            cultivation practices and expected agricultural yields.
          </p>
        </div>

        <div className={styles.grid}>
          {reports.map((report) => (
            <article key={report.crop} className={styles.card}>
                <div className={styles.cardTop}>
                <div className={styles.icon}>
                    {report.icon}
                </div>

                <span className={styles.year}>2026 REPORT</span>
                </div>

                <div className={styles.content}>
                <span className={styles.crop}>{report.crop}</span>

                <h3>{report.title}</h3>

                <p>{report.description}</p>
                </div>

                <a
                href={report.file}
                download={report.download}
                className={styles.downloadButton}
                >
                <span>Download {report.crop} Report</span>
                <span className={styles.arrow}>↓</span>
                </a>
            </article>
            ))}
        </div>
      </div>
    </section>
  );
}