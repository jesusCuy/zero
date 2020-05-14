using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Zero.Data.Model
{
    [Table(nameof(Sector))]
    public class Sector
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SectorId { get; set; }
        public string Name { get; set; }

        [Required]
        [ForeignKey(nameof(Location))] 
        public int LocationId { get; set; }
        
        [NotMapped]
        public virtual Location Location { get; set; }
    }
}
