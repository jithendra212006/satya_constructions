"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LogOut,
  LayoutDashboard,
  Building2,
  MessageSquare,
  Quote,
  Plus,
  Pencil,
  Trash2,
  X,
  Mail,
} from "lucide-react";

const STATUSES = ["upcoming", "ongoing", "completed", "sold_out"];

const INITIAL_INQUIRIES = [
  {
    id: "i1",
    full_name: "Kiran Prasad",
    email: "kiran@example.com",
    phone: "+91 98765 43210",
    subject: "Site Visit Request",
    message:
      "I am interested in booking a site visit for Vaarahi Residence this weekend. Please let me know the available time slots.",
    read: false,
    created_at: new Date(Date.now() - 3600000).toISOString(),
  },
];

const slugify = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function Admin() {
  const router = useRouter();
  const [tab, setTab] = useState("dashboard");

  // Application Global Local State
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // 1. Fetch projects from Database
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();

    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();

    const fetchInquiries = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/inquiries"); // Ensure this endpoint exists in your backend
        const data = await response.json();
        setInquiries(data);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    fetchInquiries();

    // 2. Mock Session Check
    if (
      typeof window !== "undefined" &&
      !localStorage.getItem("satya_admin_session")
    ) {
      localStorage.setItem("satya_admin_session", "mock-active-ui-session");
    }
  }, []);

  const signOut = () => {
    if (typeof window !== "undefined")
      localStorage.removeItem("satya_admin_session");
    router.replace("/auth");
  };

  const navItems = [
    { k: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { k: "projects", icon: Building2, label: "Projects" },
    { k: "testimonials", icon: Quote, label: "Testimonials" },
    { k: "inquiries", icon: MessageSquare, label: "Inquiries" },
  ];

  const stats = {
    total: projects.length,
    ongoing: projects.filter((p) => p.status === "ongoing").length,
    completed: projects.filter((p) => p.status === "completed").length,
    upcoming: projects.filter((p) => p.status === "upcoming").length,
    sold_out: projects.filter((p) => p.status === "sold_out").length,
    inquiries: inquiries.length,
  };

  return (
    <div className="min-h-screen bg-rich-black text-white lg:flex">
      {/* SIDEBAR — desktop */}
      <aside className="hidden lg:flex w-64 bg-rich-black text-white flex-col shrink-0 border-r border-white/10">
        <Link href="/" className="p-6 border-b border-white/10">
          <span className="font-display text-xl tracking-[0.3em] text-gold">
            SATYA
          </span>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">
            Admin Panel
          </p>
        </Link>
        <nav className="flex-1 py-4">
          {navItems.map((it) => (
            <button
              key={it.k}
              onClick={() => setTab(it.k)}
              className={`w-full text-left px-6 py-3 text-sm flex items-center gap-3 transition-colors ${
                tab === it.k
                  ? "bg-gold text-rich-black"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <it.icon className="w-4 h-4" /> {it.label}
            </button>
          ))}
        </nav>
        <button
          onClick={signOut}
          className="p-6 border-t border-white/10 text-sm text-white/60 hover:text-gold flex items-center gap-3"
        >
          <LogOut className="w-4 h-4" /> Sign out
        </button>
      </aside>

      {/* TOP BAR — mobile */}
      <div className="lg:hidden bg-rich-black text-white sticky top-0 z-40 border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-baseline gap-2 min-w-0">
            <span className="font-display text-lg tracking-[0.25em] text-gold">
              SATYA
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Admin
            </span>
          </Link>
          <button
            onClick={signOut}
            className="text-xs uppercase tracking-wider text-white/60 hover:text-gold flex items-center gap-1.5 shrink-0"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
        <nav className="flex overflow-x-auto no-scrollbar border-t border-white/10">
          {navItems.map((it) => (
            <button
              key={it.k}
              onClick={() => setTab(it.k)}
              className={`flex items-center gap-2 px-4 py-3 text-[11px] uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
                tab === it.k
                  ? "border-gold text-gold"
                  : "border-transparent text-white/60"
              }`}
            >
              <it.icon className="w-3.5 h-3.5" /> {it.label}
            </button>
          ))}
        </nav>
      </div>

      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-auto min-w-0">
        {tab === "dashboard" && <Dashboard stats={stats} />}
        {tab === "projects" && (
          <ProjectsAdmin projects={projects} setProjects={setProjects} />
        )}
        {tab === "testimonials" && (
          <TestimonialsAdmin
            testimonials={testimonials}
            setTestimonials={setTestimonials}
          />
        )}
        {tab === "inquiries" && (
          <InquiriesAdmin inquiries={inquiries} setInquiries={setInquiries} />
        )}
      </main>
    </div>
  );
}

function Dashboard({ stats }) {
  const cards = [
    { l: "Total Projects", v: stats.total },
    { l: "Ongoing", v: stats.ongoing },
    { l: "Completed", v: stats.completed },
    { l: "Upcoming", v: stats.upcoming },
    { l: "Sold Out", v: stats.sold_out },
    { l: "Inquiries", v: stats.inquiries },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-2">Dashboard</h1>
      <p className="text-white/60 mb-8 sm:mb-10 text-sm">
        Overview of your construction business.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div
            key={c.l}
            className="border border-white/10 bg-white/5 p-4 sm:p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              {c.l}
            </p>
            <p className="font-display text-3xl sm:text-4xl mt-2 sm:mt-3">
              {c.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsAdmin({ projects, setProjects }) {
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const del = async (id) => {
    if (!confirm("Delete this project?")) return;
    try {
      await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "DELETE",
      });
      setProjects(projects.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (response.ok) {
        setProjects(projects.map((p) => (p._id === id ? { ...p, status } : p)));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <div className="min-w-0">
          <h1 className="font-display text-3xl sm:text-4xl">Projects</h1>
          <p className="text-white/60 mt-1 text-sm">
            Manage your construction portfolio.
          </p>
        </div>
        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="bg-white/10 text-white border border-white/10 px-5 sm:px-6 py-3 text-[11px] sm:text-xs uppercase tracking-[0.25em] inline-flex items-center gap-2 hover:bg-gold hover:text-rich-black hover:border-gold self-start transition-colors"
        >
          <Plus className="w-4 h-4" /> New Project
        </button>
      </div>

      <div className="border border-white/10 overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead className="bg-white/10 text-left">
            <tr>
              <th className="p-4">Project</th>
              <th className="p-4">Location</th>
              <th className="p-4">Status</th>
              <th className="p-4">Configuration</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr
                key={p._id}
                className="border-t border-white/10 hover:bg-white/5 transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    {p.cover_image ? (
                      <img
                        src={p.cover_image}
                        alt=""
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-white/10 border border-white/10 flex items-center justify-center text-xs text-white/60 font-display rounded">
                        SATYA
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{p.name}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-white/60">{p.location}</td>
                <td className="p-4">
                  <select
                    value={p.status}
                    onChange={(e) => updateStatus(p._id, e.target.value)}
                    className="bg-rich-black border border-white/10 px-2 py-1 text-xs uppercase tracking-wider outline-none focus:border-gold"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s.replace("_", " ")}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4 text-white/60">{p.bhk_type}</td>
                <td className="p-4">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => {
                        setEditing(p);
                        setShowForm(true);
                      }}
                      className="p-2 text-white/60 hover:text-gold transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => del(p._id)}
                      className="p-2 text-white/60 hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <ProjectForm
          project={editing}
          projects={projects}
          setProjects={setProjects}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}

function ProjectForm({ project, projects, setProjects, onClose }) {
  const isEdit = !!project;
  const [form, setForm] = useState(
    project ?? {
      name: "",
      slug: "",
      location: "",
      status: "upcoming",
      starting_price: "",
      bhk_type: "",
      area_sqft: "",
      units: "",
      bathrooms: "",
      parking: "",
      overview: "",
      google_maps_link: "",
      vastu_compliant: false,
      featured: false,
      amenities: [],
      gallery: [],
      cover_image: "",
    },
  );

  const [newAmenity, setNewAmenity] = useState("");

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const addAmenity = () => {
    if (
      newAmenity.trim() &&
      !(form.amenities || []).includes(newAmenity.trim())
    ) {
      setField("amenities", [...(form.amenities || []), newAmenity.trim()]);
      setNewAmenity("");
    }
  };

  const removeAmenity = (am) => {
    setField(
      "amenities",
      form.amenities.filter((a) => a !== am),
    );
  };

  const handleCoverUpload = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("cover_image", file);

      try {
        const res = await fetch("http://localhost:5000/api/upload/cover", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        setField("cover_image", data.url); // Saves the permanent URL
      } catch (err) {
        alert("Failed to upload image");
      }
    }
  };

  const handleGalleryUpload = async (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const formData = new FormData();
      files.forEach((file) => formData.append("gallery_images", file));

      try {
        const res = await fetch("http://localhost:5000/api/upload/gallery", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        setField("gallery", [...(form.gallery || []), ...data.urls]);
      } catch (err) {
        alert("Failed to upload gallery images");
      }
    }
  };

  const removeGalleryImage = (idx) => {
    setField(
      "gallery",
      form.gallery.filter((_, i) => i !== idx),
    );
  };

  const onSave = async () => {
    if (!form.name || !form.location) {
      alert("Name and location are required");
      return;
    }

    const payload = {
      ...form,
      slug: form.slug || slugify(form.name),
      units: form.units ? Number(form.units) : null,
      bathrooms: form.bathrooms ? Number(form.bathrooms) : null,
      amenities: form.amenities ?? [],
      gallery: Array.isArray(form.gallery) ? form.gallery : [],
    };

    try {
      if (isEdit) {
        // Send PUT request
        const response = await fetch(
          `http://localhost:5000/api/projects/${project._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );
        const updatedProject = await response.json();
        setProjects(
          projects.map((p) => (p._id === project._id ? updatedProject : p)),
        );
      } else {
        // Send POST request
        const response = await fetch("http://localhost:5000/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const newProject = await response.json();
        setProjects([newProject, ...projects]);
      }
      onClose();
    } catch (error) {
      console.error("Error saving project:", error);
      alert(
        "Failed to save project. Make sure your Express server is running.",
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-rich-black w-full max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-auto border border-white/10 rounded">
        <div className="sticky top-0 bg-rich-black border-b border-white/10 p-4 sm:p-6 flex justify-between items-center z-10">
          <h2 className="font-display text-xl sm:text-2xl">
            {isEdit ? "Edit Project" : "New Project"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-destructive transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Building Name *">
              <input
                className="input"
                value={form.name ?? ""}
                onChange={(e) => setField("name", e.target.value)}
              />
            </Field>
            <Field label="Slug (URL)">
              <input
                className="input"
                placeholder="auto"
                value={form.slug ?? ""}
                onChange={(e) => setField("slug", e.target.value)}
              />
            </Field>
            <Field label="Location *">
              <input
                className="input"
                placeholder="e.g., Kankipadu, Fuzen"
                value={form.location ?? ""}
                onChange={(e) => setField("location", e.target.value)}
              />
            </Field>
            <Field label="Status">
              <select
                className="input"
                value={form.status ?? "upcoming"}
                onChange={(e) => setField("status", e.target.value)}
              >
                {STATUSES.map((s) => (
                  <option className="bg-rich-black" key={s} value={s}>
                    {s.replace("_", " ")}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Configuration (BHK)">
              <input
                className="input"
                placeholder="e.g., 2BHK"
                value={form.bhk_type ?? ""}
                onChange={(e) => setField("bhk_type", e.target.value)}
              />
            </Field>
            <Field label="Area (Sq Ft)">
              <input
                className="input"
                placeholder="e.g., 1250 Sq Ft"
                value={form.area_sqft ?? ""}
                onChange={(e) => setField("area_sqft", e.target.value)}
              />
            </Field>
            <Field label="Units">
              <input
                type="number"
                className="input"
                placeholder="e.g., 20"
                value={form.units ?? ""}
                onChange={(e) => setField("units", e.target.value)}
              />
            </Field>
            <Field label="Bathrooms">
              <input
                type="number"
                className="input"
                value={form.bathrooms ?? ""}
                onChange={(e) => setField("bathrooms", e.target.value)}
              />
            </Field>
            <Field label="Parking">
              <input
                className="input"
                placeholder="e.g., Available or 1 Covered"
                value={form.parking ?? ""}
                onChange={(e) => setField("parking", e.target.value)}
              />
            </Field>
            <Field label="Price">
              <input
                className="input"
                placeholder="e.g., Price On Request"
                value={form.starting_price ?? ""}
                onChange={(e) => setField("starting_price", e.target.value)}
              />
            </Field>
          </div>

          <Field label="Google Maps Link">
            <input
              className="input"
              placeholder="Paste Google Maps URL here"
              value={form.google_maps_link ?? ""}
              onChange={(e) => setField("google_maps_link", e.target.value)}
            />
          </Field>

          <Field label="Project Overview">
            <textarea
              rows={4}
              className="input"
              placeholder="Describe the project..."
              value={form.overview ?? ""}
              onChange={(e) => setField("overview", e.target.value)}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Cover Image">
              {form.cover_image ? (
                <div className="relative w-full h-32 mb-2 rounded border border-white/10 overflow-hidden">
                  <img
                    src={form.cover_image}
                    alt="Cover Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setField("cover_image", "")}
                    className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1.5 hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  className="input cursor-pointer"
                  onChange={handleCoverUpload}
                />
              )}
            </Field>

            <Field
              label={`Project Gallery (${form.gallery?.length || 0}/5 Images)`}
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {(form.gallery || []).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-16 h-16 rounded border border-white/10 overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(idx)}
                      className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
              {(form.gallery?.length || 0) < 5 && (
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="input cursor-pointer text-sm"
                  onChange={handleGalleryUpload}
                />
              )}
            </Field>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1.5">
              Amenities
            </p>
            <div className="flex gap-2 mb-3">
              <input
                className="input flex-1"
                placeholder="e.g., Lift Facility"
                value={newAmenity}
                onChange={(e) => setNewAmenity(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addAmenity())
                }
              />
              <button
                type="button"
                onClick={addAmenity}
                className="bg-white/10 border border-white/10 text-white px-6 text-xs uppercase tracking-wider hover:bg-gold hover:text-rich-black transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {(form.amenities || []).map((a, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs border border-white/10 bg-white/5 flex items-center gap-2 rounded-sm"
                >
                  {a}
                  <button
                    type="button"
                    onClick={() => removeAmenity(a)}
                    className="text-white/60 hover:text-destructive transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm select-none text-white/80">
              <input
                type="checkbox"
                className="accent-gold w-4 h-4"
                checked={!!form.vastu_compliant}
                onChange={(e) => setField("vastu_compliant", e.target.checked)}
              />{" "}
              Vastu Compliant
            </label>
            <label className="flex items-center gap-2 text-sm select-none text-white/80">
              <input
                type="checkbox"
                className="accent-gold w-4 h-4"
                checked={!!form.featured}
                onChange={(e) => setField("featured", e.target.checked)}
              />{" "}
              Featured
            </label>
          </div>
        </div>
        <div className="sticky bottom-0 bg-rich-black border-t border-white/10 p-4 sm:p-6 flex flex-col-reverse sm:flex-row justify-end gap-3 z-10">
          <button
            onClick={onClose}
            className="px-6 py-3 text-xs uppercase tracking-[0.25em] border border-white/10 hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-gold text-rich-black px-6 py-3 text-xs uppercase font-medium tracking-[0.25em] hover:bg-white transition-colors"
          >
            Save Project
          </button>
        </div>
      </div>
      <style>{`.input{width:100%;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.1);padding:.6rem .75rem;font-size:.875rem;color:white;outline:none;transition:border-color 0.2s;}.input:focus{border-color:#D4AF37} input[type="file"]::file-selector-button {background: rgba(255,255,255,0.1); border: none; color: white; padding: 0.25rem 0.75rem; border-radius: 2px; margin-right: 1rem; cursor: pointer; transition: background 0.2s;} input[type="file"]::file-selector-button:hover {background: #D4AF37; color: black;}`}</style>
    </div>
  );
}

// Re-added the missing Field component here
function Field({ label, children }) {
  return (
    <label className="block">
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1.5">
        {label}
      </p>
      {children}
    </label>
  );
}

function TestimonialsAdmin({ testimonials, setTestimonials }) {
  const [form, setForm] = useState({ name: "", role: "", quote: "" });

  // Add new to MongoDB
  const add = async () => {
    if (!form.name || !form.quote) return alert("Name and quote required");

    const res = await fetch("http://localhost:5000/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, review: form.quote }), // Mapping 'quote' to 'review'
    });

    const saved = await res.json();
    setTestimonials([saved, ...testimonials]);
    setForm({ name: "", role: "", quote: "" });
  };

  // Delete from MongoDB
  const del = async (id) => {
    if (!confirm("Delete?")) return;
    await fetch(`http://localhost:5000/api/testimonials/${id}`, {
      method: "DELETE",
    });
    setTestimonials(testimonials.filter((t) => t._id !== id)); // Note: Use _id
  };

  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-2">Testimonials</h1>
      <p className="text-white/60 mb-8 sm:mb-10 text-sm">
        Customer voices that appear on the home page.
      </p>
      <div className="border border-white/10 bg-white/5 p-4 sm:p-6 mb-8 space-y-3 max-w-xl">
        <h3 className="font-display text-xl mb-2">Add new</h3>
        <input
          className="w-full bg-transparent border border-white/10 px-4 py-2 text-sm outline-none focus:border-gold transition-colors"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full bg-transparent border border-white/10 px-4 py-2 text-sm outline-none focus:border-gold transition-colors"
          placeholder="Role / Project"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <textarea
          rows={3}
          className="w-full bg-transparent border border-white/10 px-4 py-2 text-sm outline-none focus:border-gold transition-colors"
          placeholder="Quote"
          value={form.quote}
          onChange={(e) => setForm({ ...form, quote: e.target.value })}
        />
        <button
          onClick={add}
          className="bg-white/10 text-white border border-white/10 px-6 py-2.5 text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-rich-black hover:border-gold transition-colors inline-block mt-2"
        >
          Add Testimonial
        </button>
      </div>
      <div className="space-y-3">
        {testimonials.map((t, index) => (
          <div
            key={t._id || t.id || index}
            className="border border-white/10 bg-white/5 p-5 flex gap-4 justify-between items-start"
          >
            <div className="min-w-0 flex-1">
              <p className="font-bold break-words">
                {t.name}{" "}
                <span className="text-white/60 text-xs font-normal">
                  — {t.role}
                </span>
              </p>
              <p className="text-sm text-white/80 mt-2 break-words">
                &ldquo;{t.review}&rdquo;
              </p>
            </div>
            <button
              onClick={() => del(t._id)}
              className="p-2 text-white/60 hover:text-destructive shrink-0 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function InquiriesAdmin({ inquiries, setInquiries }) {
  const inquiryList = Array.isArray(inquiries) ? inquiries : [];
  const toggleRead = async (id, currentStatus) => {
    await fetch(`http://localhost:5000/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !currentStatus }),
    });

    setInquiries(
      inquiryList.map((i) =>
        i._id === id ? { ...i, read: !currentStatus } : i,
      ),
    );
  };

  // Delete from MongoDB
  const del = async (id) => {
    if (!confirm("Delete?")) return;
    await fetch(`http://localhost:5000/api/inquiries/${id}`, {
      method: "DELETE",
    });
    setInquiries(inquiryList.filter((i) => i._id !== id));
  };

  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-2">Inquiries</h1>
      <p className="text-white/60 mb-8 sm:mb-10 text-sm">
        Contact form submissions and site visit requests.
      </p>
      <div className="space-y-3">
        {inquiryList.length === 0 && (
          <p className="text-white/60">No inquiries yet.</p>
        )}
        {inquiryList.map((i) => (
          <div
            key={i._id}
            className={`border p-4 sm:p-5 transition-opacity duration-200 bg-white/5 ${i.read ? "border-white/10 opacity-60" : "border-gold"}`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="font-bold flex items-start sm:items-center gap-2 flex-wrap">
                  <Mail className="w-4 h-4 text-gold shrink-0 mt-1 sm:mt-0" />
                  <span className="break-words">{i.full_name}</span>
                  <span className="text-white/60 font-normal text-xs">
                    — {new Date(i.created_at).toLocaleString()}
                  </span>
                </p>
                <p className="text-sm text-white/60 mt-1 break-words">
                  {i.email}
                  {i.phone ? ` · ${i.phone}` : ""}
                </p>
                {i.subject && (
                  <p className="text-xs uppercase tracking-[0.2em] text-gold mt-2 break-words">
                    {i.subject}
                  </p>
                )}
                <p className="text-sm mt-3 whitespace-pre-line break-words text-white/90">
                  {i.message}
                </p>
              </div>
              <div className="flex sm:flex-col gap-2 shrink-0">
                <button
                  onClick={() => toggleRead(i._id, i.read)}
                  className="flex-1 sm:flex-none text-xs uppercase tracking-wider border border-white/10 px-3 py-1.5 hover:border-gold bg-transparent transition-colors"
                >
                  {i.read ? "Mark unread" : "Mark read"}
                </button>
                <button
                  onClick={() => del(i._id)}
                  className="flex-1 sm:flex-none text-xs uppercase tracking-wider text-destructive border border-destructive/40 px-3 py-1.5 hover:bg-destructive hover:text-white bg-transparent transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
