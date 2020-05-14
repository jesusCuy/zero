using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Zero.Data.Model
{
    public class MaskLog
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaskLogId { get; set; }

        [Required]
        [ForeignKey(nameof(Sector))]
        public int SectorId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public string Description { get; set; }
        public bool Incident { get; set; }

        [NotMapped]
        public virtual Sector Sector { get; set; }
    }
}
