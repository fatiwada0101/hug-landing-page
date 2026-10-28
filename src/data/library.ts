export type LibrarySubject = "All subjects" | "Multidisciplinary" | "Computing" | "Health Sciences" | "Management & Social Sciences" | "Sciences";
export const LIBRARY_SUBJECTS: LibrarySubject[] = ["All subjects", "Multidisciplinary", "Computing", "Health Sciences", "Management & Social Sciences", "Sciences"];
export interface LibraryResource { image?: string; name: string; description: string; subject: LibrarySubject; access: "Open resources" | "Provider access"; url: string; }
export const LIBRARY_RESOURCES: LibraryResource[] = [
  { image: "/hug/library/agora.png", name: "AGORA", description: "Discover agricultural research resources.", subject: "Sciences", access: "Provider access", url: "https://www.fao.org/agora/en/" },
  { image: "/hug/library/ardi.png", name: "ARDI", description: "Access research for development and innovation.", subject: "Multidisciplinary", access: "Provider access", url: "https://ardi.wipo.int/" },
  { image: "/hug/library/oare.png", name: "OARE", description: "Find environmental research resources.", subject: "Sciences", access: "Provider access", url: "https://oaresciences.org/" },
  { image: "/hug/library/virtuallibrary.png", name: "Nigerian Virtual Library", description: "Explore the virtual library listed by Huda.", subject: "Multidisciplinary", access: "Provider access", url: "https://nigerianvirtuallibrary.com/" },

  { name: "Directory of Open Access Journals", description: "Find open journals across disciplines.", subject: "Multidisciplinary", access: "Open resources", url: "https://doaj.org/" },
  { name: "African Journals Online", description: "Explore research published in Africa.", subject: "Multidisciplinary", access: "Open resources", url: "https://www.ajol.info/" },
  { image: "/hug/library/jstor.png", name: "JSTOR", description: "Explore journals and academic collections.", subject: "Multidisciplinary", access: "Provider access", url: "https://www.jstor.org/" },
  { image: "/hug/library/sciencedirect.png", name: "ScienceDirect", description: "Discover scientific books and articles.", subject: "Multidisciplinary", access: "Provider access", url: "https://www.sciencedirect.com/" },
  { image: "/hug/library/ebscohost.png", name: "EBSCOhost", description: "Access research databases through the provider.", subject: "Multidisciplinary", access: "Provider access", url: "https://search.ebscohost.com/" },
  { name: "arXiv", description: "Read computing research preprints.", subject: "Computing", access: "Open resources", url: "https://arxiv.org/corr/home" },
  { name: "dblp", description: "Find computer science publications.", subject: "Computing", access: "Open resources", url: "https://dblp.org/" },
  { name: "IEEE Open Access", description: "Browse open engineering and computing research.", subject: "Computing", access: "Open resources", url: "https://open.ieee.org/" },
  { name: "ACM Digital Library", description: "Explore computing literature.", subject: "Computing", access: "Provider access", url: "https://dl.acm.org/" },
  { name: "IEEE Xplore", description: "Search engineering and technology publications.", subject: "Computing", access: "Provider access", url: "https://ieeexplore.ieee.org/" },
  { name: "PubMed Central", description: "Read open biomedical articles.", subject: "Health Sciences", access: "Open resources", url: "https://www.ncbi.nlm.nih.gov/pmc/" },
  { name: "PubMed", description: "Search biomedical research citations.", subject: "Health Sciences", access: "Open resources", url: "https://pubmed.ncbi.nlm.nih.gov/" },
  { name: "BioMed Central", description: "Explore open health and biology journals.", subject: "Health Sciences", access: "Open resources", url: "https://www.biomedcentral.com/" },
  { name: "Cochrane Library", description: "Find evidence for healthcare decisions.", subject: "Health Sciences", access: "Provider access", url: "https://www.cochranelibrary.com/" },
  { image: "/hug/library/hinari.png", name: "HINARI", description: "Learn about health research access.", subject: "Health Sciences", access: "Provider access", url: "https://www.research4life.org/access/hinari/" },
  { name: "SSRN", description: "Discover working papers and research.", subject: "Management & Social Sciences", access: "Open resources", url: "https://www.ssrn.com/" },
  { name: "RePEc", description: "Find economics papers and publications.", subject: "Management & Social Sciences", access: "Open resources", url: "https://ideas.repec.org/" },
  { name: "World Bank Open Knowledge Repository", description: "Read development research and reports.", subject: "Management & Social Sciences", access: "Open resources", url: "https://openknowledge.worldbank.org/" },
  { name: "PRIO Publications", description: "Explore peace and conflict research.", subject: "Management & Social Sciences", access: "Open resources", url: "https://www.prio.org/publications/" },
  { name: "UN iLibrary", description: "Find United Nations publications.", subject: "Management & Social Sciences", access: "Provider access", url: "https://www.un-ilibrary.org/" },
  { name: "ACS Publications", description: "Explore chemistry research.", subject: "Sciences", access: "Provider access", url: "https://pubs.acs.org/" },
  { name: "Royal Society of Chemistry", description: "Find chemistry journals and publications.", subject: "Sciences", access: "Provider access", url: "https://www.rsc.org/publishing/" },
  { name: "OnePetro", description: "Explore petroleum industry literature.", subject: "Sciences", access: "Provider access", url: "https://onepetro.org/" },
  { name: "PLOS", description: "Read open scientific research.", subject: "Sciences", access: "Open resources", url: "https://plos.org/" },
];

export function filterLibraryResources(query: string, subject: LibrarySubject = "All subjects", openOnly = false): LibraryResource[] {
  const keyword = query.trim().toLowerCase();
  return LIBRARY_RESOURCES.filter(resource =>
    (subject === "All subjects" || subject === resource.subject) &&
    (!openOnly || resource.access === "Open resources") &&
    `${resource.name} ${resource.description} ${resource.subject}`.toLowerCase().includes(keyword)
  );
}
